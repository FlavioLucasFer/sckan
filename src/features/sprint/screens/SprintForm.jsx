import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import sprintService from 'features/sprint/domain/service';
import sprintModel from 'features/sprint/domain/model';
import FormScreen from 'core/components/FormScreen';
import TextInput from 'core/components/TextInput';
import useFormInput from 'core/hooks/useFormInput';
import TextArea from 'core/components/TextArea';
import Select from 'core/components/Select';
import { SPRINT_ROUTE } from 'core/utils/routes';

function SprintForm() {
	const location = useLocation();
	const projects = useSelector(state => state.projects.value);

	const [sprint, setSprint] = useState({});
	const customIdentifier = useFormInput();
	const description = useFormInput();
	const sprintDuration = useFormInput();
	const project = useFormInput();

	useEffect(() => {
		if (location.state) {
			function fakeTarget(value) {
				return {
					target: {
						value,
					},
				};
			}

			const sprint = location.state.data;
			setSprint(sprint);

			customIdentifier.onChange(fakeTarget(sprint.customIdentifier));
			description.onChange(fakeTarget(sprint.description));
			sprintDuration.onChange(fakeTarget(sprint.sprintDuration));
			project.onChange(fakeTarget(sprint.project));
		}
	}, []);

	async function handleSave() {
		const Project = sprintModel(
			sprint.id,
			customIdentifier.value,
			description.value,
			sprintDuration.value,
			project.value,
		);

		try {
			await sprintService.save(Project);
		} catch (err) {
			console.log('err:', err);
		}
	}

	return (
		<FormScreen title="Sprint"
			id={sprint.id}
			backRoute={SPRINT_ROUTE}
			onSave={handleSave}>
				<div className="row">
					<TextInput {...customIdentifier}
						title="Custom identifier"
						className="col s12 m6 l4"
						type="text"
						icon="tag"
						validate />

					<TextInput {...sprintDuration}
						title="Duration"
						className="col s12 m6 l4"
						type="number"
						icon="timelapse"
						validate
						mandatory
						required />

					<Select {...project}
						title="Project"
						className="col s12 m6 l4"
						values={projects}
						valueAs="id"
						titleAs="name"
						defaultOption="Select a project"
						icon="source" />

					<TextArea {...description}
						title="Description"
						className="col s12"
						type="text"
						icon="description"
						length="255" />
				</div>

		</FormScreen>
	);
}

export default SprintForm;
