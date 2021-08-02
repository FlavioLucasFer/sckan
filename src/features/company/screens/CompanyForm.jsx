import React from 'react';
import PropTypes from 'prop-types';

import useFormInput from 'core/hooks/useFormInput';
import TextInput from 'core/components/TextInput';
import FormScreen from 'core/components/FormScreen';

CompanyForm.propTypes = {
	id: PropTypes.string,
}

function CompanyForm({ id }) {
	const companyName = useFormInput();
	const tradingName = useFormInput();
	const federalDocument = useFormInput();
	const email = useFormInput();
	
	return (
		<FormScreen title="Company"
			id={id}>
			<div className="row">
				<TextInput {...companyName}
					title="Company name"
					className="col s12 l6"
					type="text"
					icon="business"
					validate
					mandatory
					required />

				<TextInput {...tradingName} 
					title="Trading name"
					className="col s12 l6"
					type="text"
					icon="storefront"
					validate
					mandatory
					required />
			</div>

			<div className="row">
				<TextInput {...federalDocument}
					title="Federal document"
					className="col s12 l6"
					type="text"
					icon="assignment_ind"
					mask="federalDocument"
					validateBy="federalDocument"
					validate
					mandatory
					required />

				<TextInput {...email}
					title="Email name"
					className="col s12 l6"
					type="email"
					icon="email"
					validateBy="email"
					validate
					mandatory
					required />
			</div>
		</FormScreen>
	);
}

export default CompanyForm;