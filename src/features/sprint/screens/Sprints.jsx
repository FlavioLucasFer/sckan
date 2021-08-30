import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListScreen from 'core/components/ListScreen';
import useFormInput from 'core/hooks/useFormInput';
import Select from 'core/components/Select';
import { SPRINT_FORM_ROUTE } from 'core/utils/routes';

import projectService from 'features/project/domain/service';
import sprintService from 'features/sprint/domain/service';

import { setProjects } from 'redux/reducers/projects';

function Sprints() {
	const dispatch = useDispatch();
	const [contentMessage, setContentMessage] = useState('Select some project and click on filter button!');
	const [sprints, setSprints] = useState([]);
	const company = useSelector(state => state.company.value);
	const projects = useSelector(state => state.projects.value);
	const project = useFormInput();

	useEffect(async () => {
		try {
			const projects = await projectService.find({ company: company.id });
			dispatch(setProjects(projects));
		} catch (err) {
			console.log('err:', err);
		}
	}, []);
	
	const fields = [
		{ title: 'Description', field: 'description' },
		{ title: 'Duration', field: 'sprintDuration' },
	];

	function renderFiltersRow() {
		return [
			<Select {...project} 
				key="s1"
				title="Project"
				values={projects}
				className="col s12 m4 l3"
				valueAs="id"
				titleAs="name"
				defaultOption="Select a project" />
		];
	}

	async function getSprints() {
		try {
			const sprints = await sprintService.find({ project: project.value });
			setSprints(sprints);
		} catch (err) {
			throw err;
		}
	}

	async function handleFilter() {
		try {
			await getSprints();
			setContentMessage('');
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function handleRemove(id) {
		try {
			await sprintService.remove(id);
			await getSprints();
		} catch (err) {
			console.log('err:', err);
		}
	}

  return (
		<ListScreen title="Sprints"
			singularTitle="Sprint"
			data={sprints}
			fields={fields}
			identifierField="customIdentifier"
			itemsQuantityByPage={10}
			formRoute={SPRINT_FORM_ROUTE}
			filters={renderFiltersRow()}
			filterButtonDisabled={!project.value}
			contentMessage={contentMessage}
			onRefresh={getSprints}
			onRemove={handleRemove}
			onFilter={handleFilter} />
  );
}

export default Sprints;
