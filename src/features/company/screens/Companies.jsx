import './Companies.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListScreen from 'core/components/ListScreen';
import { COMPANY_FORM_ROUTE } from 'core/utils/routes';

import companyService from 'features/company/domain/service';

import { setCompanies } from 'redux/reducers/companies';

function Companies() {
	const dispatch = useDispatch();
	const companies = useSelector(state => state.companies.value);

	const fields = [
		{ title: 'Company name', field: 'companyName' },
		{ title: 'Trading name', field: 'tradingName' },
		{ title: 'Federal document', field: 'federalDocument' },
		{ title: 'E-mail', field: 'email' },
	];

	useEffect(async () => {
		await getCompanies();
	}, []);

	async function getCompanies() {
		try {
			const companies = await companyService.find();
			dispatch(setCompanies(companies));
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function handleRemove(id) {
		try {
			await companyService.remove(id);
			await getCompanies();
		} catch (err) {
			console.log('err:', err);
		}
	}

	return (
		<ListScreen title="Companies"
			singularTitle="Company"
			data={companies}
			fields={fields}
			identifierField="companyName"
			itemsQuantityByPage={10}
			formRoute={COMPANY_FORM_ROUTE}
			onRefresh={getCompanies}
			onRemove={handleRemove} />
	);
}

export default Companies;
