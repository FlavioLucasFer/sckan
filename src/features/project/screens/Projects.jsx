import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PROJECT_FORM_ROUTE } from 'core/utils/routes';

import projectService from 'features/project/domain/service';
import ListScreen from 'core/components/ListScreen';

import { setProjects } from 'redux/reducers/projects';

function Projects() {
	const dispatch = useDispatch();
	const projects = useSelector(state => state.projects.value);
	
	const fields = [
		{ title: 'Name', field: 'name' },
		{ title: 'Description', field: 'description' },
		{ title: 'Clone link', field: 'cloneLink' },
	];

	useEffect(async () => {
		await getProjects();
	}, []);

	async function getProjects() {
		try {
			const projects = await projectService.find();
			dispatch(setProjects(projects));
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function handleRemove(id) {
		try {
			await projectService.remove(id);
			await getProjects();
		} catch (err) {
			console.log('err:', err);
		}
	}

  return (
    <ListScreen title="Projects"
			singularTitle="Project"
			data={projects}
			fields={fields}
			identifierField="name"
			itemsQuantityByPage={10}
			formRoute={PROJECT_FORM_ROUTE}
			onRefresh={getProjects}
			onRemove={handleRemove} />
  );
}

export default Projects;
