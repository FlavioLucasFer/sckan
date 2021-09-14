import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormScreen from 'core/components/FormScreen';
import useFormInput from 'core/hooks/useFormInput';
import TextInput from 'core/components/TextInput';
import { COMPANY_ROUTE } from 'core/utils/routes';

import companyService from 'features/company/domain/service';
import companyModel from 'features/company/domain/model';

import { setCompanies } from 'redux/reducers/companies';

function CompanyForm() {
	const dispatch = useDispatch();
	const location = useLocation();

	const [company, setCompany] = useState({});
	const companyName = useFormInput();
	const tradingName = useFormInput();
	const federalDocument = useFormInput();
	const email = useFormInput();

	useEffect(() => {
		if (location.state) {
			function fakeTarget(value) {
				return {
					target: {
						value,
					},
				};
			}

			const company = location.state.data;
			setCompany(company);

			companyName.onChange(fakeTarget(company.companyName));
			tradingName.onChange(fakeTarget(company.tradingName));
			federalDocument.onChange(fakeTarget(company.federalDocument));
			email.onChange(fakeTarget(company.email));
		}
	}, []);
	
	async function handleSave() {
		const Company = companyModel(
			company.id,
			companyName.value,
			tradingName.value,
			federalDocument.value,
			email.value,
		);

		try {
			await companyService.save(Company);
			await refreshCompanies();
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function refreshCompanies() {
		const companies = await companyService.find();
		dispatch(setCompanies(companies));
	}


	return (
		<FormScreen title="Company"
			id={company.id}
			backRoute={COMPANY_ROUTE}
			onSave={handleSave}>
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