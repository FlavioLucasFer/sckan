import './TaskFormModal.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import Icon from 'core/components/Icon';
import Modal from 'core/components/Modal';
import isAdmin from 'core/helpers/isAdmin';
import useFormInput from 'core/hooks/useFormInput';
import isScrumMaster from 'core/helpers/isScrumMaster';
import ConfirmActionModal from 'core/modals/ConfirmActionModal';

import taskModel from 'features/task/domain/model';
import taskService from 'features/task/domain/service';
import TaskCard from 'features/task/components/TaskCard';
import PriorityBox from 'features/task/components/PriorityBox';

import { setTask } from 'redux/reducers/task';

function fakeTarget(value) {
	return {
		target: {
			value,
		},
	};
}

TaskFormModal.propTypes = {
	id: PropTypes.string.isRequired,
	employee: PropTypes.oneOfType(String, Number),
	sprint: PropTypes.oneOfType(String, Number),
	afterSave: PropTypes.func,
	afterRemove: PropTypes.func,
};

function TaskFormModal(props) {
	const {  
		id,
		employee,
		sprint,
		afterSave,
		afterRemove,
	} = props;

	const dispatch = useDispatch();
	const task = useSelector(state => state.task.value);
	const user = useSelector(state => state.user.value);

	const name = useFormInput('');
	const [priority, setPriority] = useState('NP');
	const [plannedSize, setPlannedSize] = useState('');
	const description = useFormInput('');

	
	useEffect(() => {
		if (!isEmpty(task)) {
			name.onChange(fakeTarget(task.name));
			setPriority(task.priority);
			setPlannedSize(task.plannedSize);
			description.onChange(fakeTarget(task.description));
		}

		console.log('task:', task);
	}, [task]);

	const actions = [{
		id: 'save',
		title: !isEmpty(task) ? 'Save' : 'Create',
		className: 'modal-close waves-light teal accent-4 white-text',
		disabled: isSaveButtonDisabled(),
		onClick: handleSave,
	}, {
		id: 'discard',
		title: 'Discard',
		className: 'modal-close waves-light red accent-2 white-text',
		onClick: handleDiscard,
	}];

	function readOnly() {
		return !isAdmin(user) && !isScrumMaster(user);
	}

	function isSaveButtonDisabled() {
		let isDisabled = !name.value || !priority || !plannedSize || !description.value;

		if (!isEmpty(task)) {
			const aux = isDisabled;

			isDisabled = (
				name.value == task.name &&
				priority == task.priority &&
				plannedSize == task.plannedSize &&
				description.value == task.description
			);

			if (!isDisabled) 
				isDisabled = aux;
		}

		return isDisabled;
	}

	
	function handlePriorityClick(priority) {
		setPriority(priority);
	}
	
	function handlePlannedSizeInputChange(e) {
		const { value } = e.target;
		
		setPlannedSize(value.replace(/\D/g, ''));
	}
	
	async function handleSave() {
		const Task = taskModel(
			task.id,
			name.value,
			description.value,
			priority,
			plannedSize,
			task.size || 0,
			task.timeSpent || '000000',
			task.status || 'TD',
			task.userThatCreated || user.id,
			task.employee || employee,
			task.sprint || sprint,
		);

		
		try {
			await taskService.save(Task);
			
			handleDiscard();

			if (afterSave)
				afterSave();
		} catch (err) {
			console.log('err:', err);
		}
	}

	function handleDiscard() {
		name.onChange(fakeTarget(''));
		setPriority('NP');
		setPlannedSize('');
		description.onChange(fakeTarget(''));

		dispatch(setTask({}));
	}

	async function handleRemove() {
		try {
			await taskService.remove(task.id);
			
			handleDiscard();

			if (afterRemove)
				afterRemove();
		} catch (err) {
			console.log('err:', err);
		}
	}

	function renderPreview() {
		if (isEmpty(task)) {
			return (
				<div className="flex h-center">
					<div className="preview-card">
						<TaskCard task={{
							name: name.value,
							plannedSize,
							priority,
						}} />
					</div>
				</div>
			);
		}

		return (
			<div className="row">
				<div className="preview-card col s12 m6">
					<div className="col s12 m10 offset-m1">
						<span>Old</span>

						<TaskCard task={task} />
					</div>
				</div>
			
				<div className="preview-card col s12 m6">
					<div className="col s12 m10 offset-m1">
						<span>New</span>

						<TaskCard task={{
							name: name.value,
							plannedSize,
							priority,
						}} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<Modal id={id}
			actions={!readOnly() && actions}
			contentClassName="no-overflow-y" >

			{!readOnly() ?
				<Icon className="modal-trigger remove-button red-text text-accent-3 "
					type="outlined"
					href="#confirm-delete-task-modal">
					delete
				</Icon>
			:
				<Icon className="modal-close remove-button red-text text-accent-3 "
					type="round">
					close
				</Icon>
			}
			
			<input {...name} 
				className="title-input"
				placeholder="Name"
				disabled={readOnly()} />

			<label htmlFor="priority-container"
				className="label">
					Priotity
			</label>
			
			<div id="priority-container" 
				className="flex v-center"
				style={{ marginBottom: '10px' }}>
				<PriorityBox name="Urgent"
					selected={priority === 'UG'}
					color="red"
					onClick={!readOnly() && handlePriorityClick.bind(null, 'UG')} />

				<PriorityBox name="High"
					selected={priority === 'HG'}
					color="orange"
					onClick={!readOnly() && handlePriorityClick.bind(null, 'HG')} />

				<PriorityBox name="Medium"
					selected={priority === 'MD'}
					color="light-blue"
					onClick={!readOnly() && handlePriorityClick.bind(null, 'MD')} />

				<PriorityBox name="Low"
					selected={priority === 'LW'}
					color="cyan accent-3"
					onClick={!readOnly() && handlePriorityClick.bind(null, 'LW')} />

				<PriorityBox name="No priority"
					selected={priority === 'NP'}
					color="blue-grey lighten-2"
					onClick={!readOnly() && handlePriorityClick.bind(null, 'NP')} />
			</div>

			<label htmlFor="planned-size-input"
				className="label">
				Planned size
			</label>

			<input id="planned-size-input"
				className="planned-size-input"
				value={plannedSize}
				maxLength="4"
				style={{ marginBottom: '10px' }}
				disabled={readOnly()}
				onChange={handlePlannedSizeInputChange} />

			<label htmlFor="description-input"
				className="label">
				Description
			</label>

			<textarea {...description}
				id="description-input"
				className="description-input"
				maxLength="500"
				disabled={readOnly()}
				style={{ marginBottom: '10px' }} />
			
			{!readOnly() ?
				<div className="preview">
					<label htmlFor="description-input"
						className="label">
						Preview

						{renderPreview()}
					</label>
				</div>
			:
				null
			}

			<ConfirmActionModal id="confirm-delete-task-modal"
				title="Are you sure you want to delete this task?"
				onConfirm={handleRemove} />
		</Modal>
	);
}

export default TaskFormModal;
