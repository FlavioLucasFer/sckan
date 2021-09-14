import 'features/task/Task.css';
import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import isScrumMaster from 'core/helpers/isScrumMaster';
import CardPanel from 'core/components/CardPanel';
import Button from 'core/components/Button';
import Select from 'core/components/Select';
import isAdmin from 'core/helpers/isAdmin';

import TaskFormModal from 'features/task/modals/TaskFormModal';
import sprintService from 'features/sprint/domain/service';
import TaskList from 'features/task/components/TaskList';
import taskService from 'features/task/domain/service';
import userService from 'features/user/domain/service';
import taskModel from 'features/task/domain/model';
import moveItemBetweenLists from 'core/utils/moveItemBetweenLists';

function Task() {
	const user = useSelector(state => state.user.value);
	const company = useSelector(state => state.company.value);
	const projects = useSelector(state => state.projects.value);
	const [sprints, setSprints] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [project, setProject] = useState(''); 
	const [selectedSprint, setSelectedSprint] = useState('');
	const [employee, setEmployee] = useState('');
	const [sprint, setSprint] = useState({});

	const [tasks, setTasks] = useState([]);
	const [todo, setTodo] = useState([]);
	const [doing, setDoing] = useState([]);
	const [reviewingCode, setReviewingCode] = useState([]);
	const [testing, setTesting] = useState([]);
	const [done, setDone] = useState([]);

	const [dropSource, setDropSource] = useState('');
	const [dropDestination, setDropDestination] = useState('');

	const [gradientColor, setGradientColor] = useState('');

	useEffect(async () => {
		if (isAdmin(user) || isScrumMaster(user)) {
			try {
				await getEmployees();
			} catch (err) {
				console.log('err:', err);
			}
		}

		setEmployee(user.id);
	}, []);

	useEffect(() => {
		const images = [
			'rgba(241,71,168,1) 0%, rgba(32,234,238,1) 100%',
			'rgba(241,165,71,1) 0%, rgba(230,238,32,1) 100%',
			'rgba(71,203,241,1) 0%, rgba(32,238,104,1) 100%',
			'rgba(108,71,241,1) 0%, rgba(173,32,238,1) 100%',
			'rgba(231,231,231,1) 0%, rgba(91,91,91,1) 100%',
		];

		const randomIndex = Math.floor(Math.random() * 5);

		setGradientColor(images[randomIndex]);
	}, []);

	async function getSprints(project) {
		try {
			const sprints = await sprintService.find({ project });
			setSprints(sprints);
		} catch (err) {
			throw err;
		}
	}

	async function getEmployees() {
		try {
			const employees = await userService.find({ company: company.id });
			setEmployees(employees);
		} catch (err) {
			throw err;
		}
	}

	async function getTasks(employee, sprint) {
		try {
			const tasks = await taskService.find({ employee, sprint });
			setTasks(tasks);
			setTodo(getTodo(tasks));
			setDoing(getDoing(tasks));
			setReviewingCode(getReviewingCode(tasks));
			setTesting(getTesting(tasks));
			setDone(getDone(tasks));
		} catch (err) {
			throw err;
		}
	}

	function clearTasks() {
		setTasks([]);
		setTodo([]);
		setDoing([]);
		setReviewingCode([]);
		setTesting([]);
		setDone([]);
	}

	function getTodo(tasks) {
		return tasks ? tasks.filter(e => e.status === 'TD') : [];
	}

	function getDoing(tasks) {
		return tasks ? tasks.filter(e => e.status === 'DG') : [];
	}
	
	function getReviewingCode(tasks) {
		return tasks ? tasks.filter(e => e.status === 'RC') : [];
	}
	
	function getTesting(tasks) {
		return tasks ? tasks.filter(e => e.status === 'TE') : [];
	}
	
	function getDone(tasks) {
		return tasks ? tasks.filter(e => e.status === 'DN') : [];
	}

	async function handleProjectSelectChange(e) {
		const { value } = e.target;

		setProject(value);
		setSelectedSprint('');
		setSprint('');
		clearTasks();
		try {
			await getSprints(value);
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function handleSprintSelectChange(e) {
		const { value } = e.target;
		setSelectedSprint(value);
		const sprint = sprints.find(e => e.id == value);
		setSprint(sprint);

		if (employee) {
			try {
				await getTasks(employee, value);
			} catch (err) {
				console.log('err:', err);
			}
		}
	}

	async function handleEmployeeSelectChange(e) {
		const { value } = e.target;
		setEmployee(value);

		try {
			const tasks = await getTasks(value, selectedSprint);
			setTasks(tasks);
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function handleMove(task, status) {
		const Task = taskModel(
			task.id,
			task.name,
			task.description,
			task.priority,
			task.plannedSize,
			task.size,
			task.timeSpent,
			status,
			task.userThatCreated,
			task.employee,
			task.sprint,
		);

		try {
			await taskService.save(Task);
			await getTasks(employee, selectedSprint);
		} catch (err) {
			console.log('err:', err);
		}
	}

	function getList(id) {
		switch (id) {
			case 'todo-droppable':
				return todo;

			case 'doing-droppable':
				return doing;

			case 'reviewing-code-droppable':
				return reviewingCode;

			case 'testing-droppable':
				return testing;

			case 'done-droppable':
				return done;
		}
	}

	function setList(id, newList) {
		switch (id) {
			case 'todo-droppable':
				return setTodo(newList);

			case 'doing-droppable':
				return setDoing(newList);

			case 'reviewing-code-droppable':
				return setReviewingCode(newList);

			case 'testing-droppable':
				return setTesting(newList);

			case 'done-droppable':
				return setDone(newList);
		}
	}

	function getStatusByDrppableId(id) {
		switch (id) {
			case 'todo-droppable':
				return 'TD';

			case 'doing-droppable':
				return 'DG';

			case 'reviewing-code-droppable':
				return 'RC';

			case 'testing-droppable':
				return 'TE';

			case 'done-droppable':
				return 'DN';
		}
	}

	function handleDragStart(result) {
		setDropSource(result.source.droppableId);
	}

	function handleDragUpdate(result) {
		if (result.destination) {
			setDropDestination(result.destination.droppableId);
		}
	}

	function handleDragEnd(result) {
		const { source, destination } = result;

		console.log('result:', result);

		setDropSource('');
		setDropDestination('');

		if (!destination)
			return;

		if (source.droppableId !== destination.droppableId) {
			const sourceList = getList(source.droppableId);
			const destinationList = getList(destination.droppableId);

			const result = moveItemBetweenLists(
				sourceList,
				destinationList,
				source,
				destination,
				true,
			);

			handleMove(sourceList[source.index], getStatusByDrppableId(destination.droppableId));

			setList(source.droppableId, result[source.droppableId]);
			setList(destination.droppableId, result[destination.droppableId]);
		}

		return;
	}

  return (
		<section id="tasks-section"
			className="div-container"
			style={{ background: `linear-gradient(170deg, ${gradientColor})` }}>
			
			<div>
				<CardPanel className="filter-card-content"
					cardClassName="filter-card row no-margin"
					noCol>
					<Select title="Project"
						className="col s12 m6 l3 no-margin-bottom"
						value={project}
						values={projects}
						valueAs="id"
						titleAs="name"
						defaultOption="Select a project"
						onChange={handleProjectSelectChange} />

					<Select title="Sprint"
						className="col s12 m6 l3 no-margin-bottom"
						value={selectedSprint}
						values={sprints}
						valueAs="id"
						titleAs="customIdentifier"
						defaultOption="Select a sprint"
						disabled={!project}
						onChange={handleSprintSelectChange} />

					{isAdmin(user) || isScrumMaster(user) ?
						<Select title="Employee"
							className="col s12 m6 l3 no-margin-bottom"
							value={employee}
							values={employees}
							valueAs="id"
							titleAs="name"
							defaultOption="Select a employee"
							disabled={!selectedSprint}
							onChange={handleEmployeeSelectChange} />
					:
						null
					}

				</CardPanel>
			</div>
			
      <div>
				<CardPanel style={{ width: '100%' }}
					cardClassName="sprint-card center"
					noCol>
					<h6>
						{selectedSprint ? 
							`Sprint #${sprint.customIdentifier}` 
						: 
							'Waiting you select some sprint...'
						}
					</h6>
				</CardPanel>
			</div>

			<DragDropContext onDragStart={user.id === employee && handleDragStart}
				onDragUpdate={user.id === employee && handleDragUpdate}
				onDragEnd={user.id === employee && handleDragEnd}>
				<div className="task-list-container">
					<TaskList title="Todo" 
						data={todo}
						droppableId="todo-droppable"
						isDropDisabled={dropSource === 'todo-droppable'}
						isReorderDisabled={dropDestination === 'todo-droppable'}
						first
						contextMenuDisabled={user.id !== employee}
						taskListStyle={{ height: '85%' }}
						onMove={handleMove} >
						{isAdmin(user) || isScrumMaster(user) ?
							<Button className="modal-trigger"
								icon={{ name: 'add' }}
								color="teal accent-4"
								style={{ width: '100%', marginTop: '10px' }}
								href="#task-form-modal" />
						:
							null
						}
					</TaskList>

					<TaskList title="Doing" 
						data={doing}
						droppableId="doing-droppable"
						isDropDisabled={dropSource === 'doing-droppable'}
						isReorderDisabled={dropDestination === 'doing-droppable'}
						contextMenuDisabled={user.id !== employee}
						onMove={handleMove} />
					
					<TaskList title="Reviewing code" 
						data={reviewingCode}
						droppableId="reviewing-code-droppable"
						isDropDisabled={dropSource === 'reviewing-code-droppable'}
						isReorderDisabled={dropDestination === 'reviewing-code-droppable'}
						contextMenuDisabled={user.id !== employee}
						onMove={handleMove} />
					
					<TaskList title="Testing" 
						data={testing}
						droppableId="testing-droppable"
						isDropDisabled={dropSource === 'testing-droppable'}
						isReorderDisabled={dropDestination === 'testing-droppable'}
						contextMenuDisabled={user.id !== employee}
						onMove={handleMove} />
					
					<TaskList title="Done" 
						data={done}
						droppableId="done-droppable"
						isDropDisabled={dropSource === 'done-droppable'}
						isReorderDisabled={dropDestination === 'done-droppable'}
						last
						contextMenuDisabled={user.id !== employee}
						onMove={handleMove} />
				</div>
			</DragDropContext>

			<TaskFormModal id="task-form-modal"
				employee={employee}
				sprint={selectedSprint}
				afterSave={getTasks.bind(null, employee, selectedSprint)}
				afterRemove={getTasks.bind(null ,employee, selectedSprint)} />
    </section>
  );
}

export default Task;
