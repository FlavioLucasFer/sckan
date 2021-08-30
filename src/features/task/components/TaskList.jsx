import 'features/task/components/css/TaskList.css';
import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { ContextMenuTrigger } from 'react-contextmenu';
import { useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';

import CardPanel from 'core/components/CardPanel';

import TaskCard from 'features/task/components/TaskCard';
import TaskContextMenu from 'features/task/components/TaskContextMenu';

import { setTask } from 'redux/reducers/task';
import Icon from 'core/components/Icon';

TaskList.propTypes = {
	droppableId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(Object).isRequired,
	taskListStyle: PropTypes.object,
	first: PropTypes.bool,
	last: PropTypes.bool,
	contextMenuDisabled: PropTypes.bool,
	onMove: PropTypes.func,
	isDropDisabled: PropTypes.bool,
	isReorderDisabled: PropTypes.bool,
	children: PropTypes.element,
};

function TaskList(props) {
	const { 
		droppableId,
		title,
		data,
		taskListStyle,
		first,
		last,
		contextMenuDisabled,
		onMove,
		isDropDisabled,
		isReorderDisabled,
		children,
		...rest
	} = props;

	const id = uniqueId('task-list-');

	const dispatch = useDispatch();

	function cardPanelWidth() {
		const width = $('#tasks-section').width() / 5;

		if (width < 300)
			return '300px';

		return `${width}px`;
	}

	function cardHeight(isDraggingOver) {
		const height = $(`#${id}`).height();

		if (data.length === 0 && isDraggingOver)
			return `${height + 140}px`;
		
		else if (data.length >= 6) 
			return '78%';

		return 'fit-content';
	}

	function handleTaskClick(task) {
		dispatch(setTask(task));
	}

	function handleMove(task, status) {
		if (onMove)
			onMove(task, status);
	}
	return (
		<Droppable droppableId={droppableId}
			isDropDisabled={isDropDisabled} >
			{(provided, snapshot) => (
				<CardPanel {...rest}
					ref={provided.innerRef}
					id={id}
					cardClassName={`task-list-card ${first && 'no-margin-left'} ${last && 'no-margin-right'}`}
					cardStyle={{ height: cardHeight(snapshot.isDraggingOver) }}
					style={{ width: cardPanelWidth(), position: 'relative' }}
					noCol>
					{!props.isDropDisabled && snapshot.isDraggingOver ?
						<div className="div-is-dragging-over"
							style={{
								right: last ? 0 : 10,
								height: `${$(`#${id}`).height() + (data.length === 0 ? 140 : 20)}px`,
								width: `${$(`#${id}`).width() + 20}px`,
							}}>
							<Icon type="round"
								size="large"
								color="white-text">
									add
							</Icon>
						</div>
					:
						null
					}

					<h5>{title}</h5>

					<div className="task-list" 
						style={taskListStyle}>
						{data.map((e, i) => (
							<Draggable key={e.id}
								draggableId={e.id}
								index={i}>
								{(provided) => {
									// console.log('snapshot:', snapshot);
									return (
									<div ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className={isReorderDisabled ? 'no-transform' : ''}>
										<a className="modal-trigger"
											href="#task-form-modal"
											style={{ cursor: 'pointer' }}
											onClick={handleTaskClick.bind(null, e)}>
											<ContextMenuTrigger id={e.id}>
												<TaskCard task={e} />
											</ContextMenuTrigger>
										</a>

										{!contextMenuDisabled ?
											<TaskContextMenu id={e.id}
												task={e}
												onMove={handleMove} />
										:
											null
										}
									</div>
								)}}
							</Draggable>
						))}
					</div>

					{children}
				</CardPanel>
			)}
		</Droppable>
	);
}

export default TaskList;