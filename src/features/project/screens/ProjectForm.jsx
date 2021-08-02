import React from 'react';
import PropTypes from 'prop-types';

import FormScreen from 'core/components/FormScreen';
import TextInput from 'core/components/TextInput';
import useFormInput from 'core/hooks/useFormInput';
import Select from 'core/components/Select';
import TextArea from 'core/components/TextArea';

ProjectForm.propTypes = {
	id: PropTypes.string,
}

function ProjectForm({ id }) {
	const name = useFormInput();
	const description = useFormInput();
	const contractorName = useFormInput();
	const cloneLink = useFormInput();
	const scrumMaster = useFormInput();
	const productOwner = useFormInput();
	const userThatCreated = useFormInput();

	return (
		<FormScreen title="Project"
			id={id}>
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
					values={[]}
					defaultOption="Select a user"
					icon="person" />

				<Select {...productOwner}
					title="Product owner"
					className="col s12 m6 l4"
					values={[]}
					defaultOption="Select a user"
					icon="person" />

				<Select {...userThatCreated}
					title="User that created project"
					className="col s12 m6 l4"
					values={[]}
					defaultOption="Select a user"
					icon="person" />
			</div>
		</FormScreen>
	);
}

export default ProjectForm;
