import './Companies.css';
import React, { useState } from 'react';

import ListScreen from 'core/components/ListScreen';
import { COMPANY_FORM_ROUTE } from 'core/utils/routes';

function Companies() {
	const [data, setData] = useState([
		{
			id: 1213,
			companyName: 'Testing',
			tradingName: 'Hard code test',
			federalDocument: '111.111.111-11',
			email: 'mail@email.com',
		}, {
			companyName: 'bbb',
			id: 1345,
			federalDocument: '131.131.131-13',
			email: 'amail123@email.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
			tradingName: 'absdbstsh',
		}, {
			companyName: 'ssahsas',
			id: 1818,
			federalDocument: '121.121.121-12',
			email: 'mail123@email.com',
			tradingName: 'Hash',
		},
	]);

	const fields = [
		{title: 'Trading name', field: 'tradingName'},
		{title: 'Federal document', field: 'federalDocument'},
		{title: 'E-mail', field: 'email'},
	];

	return (
		<ListScreen title="Companies"
			singularTitle="Company"
			data={data}
			fields={fields}
			identifierField="companyName"
			pagesQuantity={3}
			formRoute={COMPANY_FORM_ROUTE}
			onRefresh={null} />
	);
}

export default Companies;
