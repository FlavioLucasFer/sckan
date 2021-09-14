import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FormScreen from 'core/components/FormScreen';
import useFormInput from 'core/hooks/useFormInput';
import TextInput from 'core/components/TextInput';
import TextArea from 'core/components/TextArea';
import Select from 'core/components/Select';
import { PROJECT_ROUTE } from 'core/utils/routes';

import projectService from 'features/project/domain/service';
import projectModel from 'features/project/domain/model';
import userService from 'features/user/domain/service';

import { setProductOwners } from 'redux/reducers/productOwners';
import { setScrumMasters } from 'redux/reducers/scrumMasters';
import { setProjects } from 'redux/reducers/projects';

function ProjectForm() {
	const dispatch = useDispatch();
	const location = useLocation();
	const user = useSelector(state => state.user.value);
	const company = useSelector(state => state.company.value);
	const scrumMasters = useSelector(state => state.scrumMasters.value);
	const productOwners = useSelector(state => state.productOwners.value);

	const [project, setProject] = useState({}); 
	const name = useFormInput();
	const description = useFormInput();
	const contractorName = useFormInput();
	const cloneLink = useFormInput();
	const scrumMaster = useFormInput();
	const productOwner = useFormInput();

	useEffect(() => {
		if (location.state) {
			function fakeTarget(value) {
				return {
					target: {
						value,
					},
				};
			}

			const project = location.state.data;
			setProject(project);

			name.onChange(fakeTarget(project.name));
			description.onChange(fakeTarget(project.description));
			contractorName.onChange(fakeTarget(project.contractorName));
			cloneLink.onChange(fakeTarget(project.cloneLink));
			scrumMaster.onChange(fakeTarget(project.scrumMaster));
			productOwner.onChange(fakeTarget(project.productOwner));
		}
	}, []);

	useEffect(async () => {
		try {
			const scrumMasters = await userService.find({ company: company.id, 'company_position.name': 'SM' });
			dispatch(setScrumMasters(scrumMasters));
		} catch (err) {
			console.log('err:', err);
		}
	}, []);

	useEffect(async () => {
		try {
			const productOwners = await userService.find({ company: company.id, 'company_position.name': 'PO' });
			dispatch(setProductOwners(productOwners));
		} catch (err) {
			console.log('err:', err);
		}
	}, []);

	async function handleSave() {
		const Project = projectModel(
			project.id,
			name.value,
			description.value,
			contractorName.value,
			cloneLink.value,
			user.id,
			scrumMaster.value,
			productOwner.value,
			company.id,
		);

		try {
			await projectService.save(Project);
			await refreshProjects();
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function refreshProjects() {
		const projects = await projectService.find();
		dispatch(setProjects(projects));
	}

	return (
		<FormScreen title="Project"
			id={project.id}
			backRoute={PROJECT_ROUTE}
			onSave={handleSave}>
			<div className="row">
				<TextInput {...name}
					title="Name"
					className="col s12 l6"
					type="text"
					icon="source"
					validate
					mandatory
					required />

				<TextInput {...contractorName}
					title="Contractor name"
					className="col s12 l6"
					type="text"
					icon="face"
					validate />

				<TextArea {...description}
					title="Description"
					className="col s12"
					type="text"
					icon="description"
					length="500" />

				<TextInput {...cloneLink}
					title="Clone link"
					className="col s12"
					type="url"
					icon="link"
					validate />

				<Select {...scrumMaster}
					title="Scrum master"
					className="col s12 m6 l4"
					values={scrumMasters}
					valueAs="id"
					titleAs="name"
					defaultOption="Select a user"
					icon="person" />

				<Select {...productOwner}
					title="Product owner"
					className="col s12 m6 l4"
					values={productOwners}
					valueAs="id"
					titleAs="name"
					defaultOption="Select a user"
					icon="person" />
			</div>
		</FormScreen>
	);
}

export default ProjectForm;
