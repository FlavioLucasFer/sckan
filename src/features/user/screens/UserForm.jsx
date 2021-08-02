import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormScreen from 'core/components/FormScreen';
import useFormInput from 'core/hooks/useFormInput';
import TextInput from 'core/components/TextInput';
import Select from 'core/components/Select';

UserForm.propTypes = {
	id: PropTypes.string,
};

function UserForm({ id }) {
	const name = useFormInput();
	const login = useFormInput();
	const password = useFormInput();
	const cpf = useFormInput();
	const companyPosition = useFormInput();
	const company = useFormInput();
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const companyPositions = [
		{ title: 'Scrum Master', value: 'SM' },
		{ title: 'Product Owner', value: 'PO' },
		{ title: 'Developer', value: 'DV' },
		{ title: 'Admin', value: 'AD' },
	];

	function handlePasswordVisilityIconClick() {
		setPasswordIsVisible(!passwordIsVisible);
	}

	return (
		<FormScreen title="User"
			id={id}>
			<div className="row">
				<TextInput {...name}
					title="Name"
					className="col s12 m6 l8"
					type="text"
					icon="account_box"
					validate
					mandatory
					required />

				<TextInput {...cpf}
					title="CPF"
					className="col s12 m6 l4"
					type="text"
					icon="assignment_ind"
					mask="cpf"
					validateBy="cpf"
					validate
					mandatory
					required />

				<TextInput {...login}
					title="Login"
					className="col s12 m6"
					type="text"
					icon="login"
					validate
					mandatory
					required />

				<TextInput {...password}
					title="Password"
					className="col s12 m6"
					type={passwordIsVisible ? 'text' : 'password'}
					icon={passwordIsVisible ? 'visibility_off' : 'visibility'}
					validate
					mandatory
					required
					iconClick={handlePasswordVisilityIconClick} />
			</div>

			<div className="row">
				<Select {...companyPosition}
					title="Company position"
					className="col s12 m6 l4"
					values={companyPositions}
					defaultOption="Select a company position"
					icon="badge" />

				<Select {...company}
					title="Company"
					className="col s12 m6 l4"
					values={[]}
					defaultOption="Select a company"
					icon="business" />
			</div>
		</FormScreen>
	);
}

export default UserForm;
