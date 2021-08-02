import React from 'react';
import PropTypes from 'prop-types';

import FormScreen from 'core/components/FormScreen';
import TextInput from 'core/components/TextInput';
import useFormInput from 'core/hooks/useFormInput';
import TextArea from 'core/components/TextArea';
import Select from 'core/components/Select';

SprintForm.propTypes = {
	id: PropTypes.string,
};

function SprintForm({ id }) {
	const customIdentifier = useFormInput();
	const description = useFormInput();
	const sprintDuration = useFormInput();
	const project = useFormInput();

	return (
		<FormScreen title="Sprint"
			id={id}>
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
						values={[]}
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
