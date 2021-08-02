import 'materialize-css';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import { NEW_COMPANY_ROUTE } from 'core/utils/routes';

import Companies from './Companies';

function renderCompanyScreen() {
	const history = createMemoryHistory();

	render(
		<Router history={history}>
			<Companies />
		</Router>
	);

	return history;
}

const leftClick = {
	button: 0,
}

describe('Tasks screen tests', () => {
	test('Should render label "Companies"', () => {
		renderCompanyScreen();

		const companiesLabel = screen.getByTestId('companies-label');
		expect(companiesLabel).toBeInTheDocument();
	});

	test('Should render add new company button', () => {
		renderCompanyScreen();

		const newCompanyButton = screen.getByTestId('new-company-button');
		expect(newCompanyButton).toBeInTheDocument();
	});

	test('Should render companies list', () => {
		renderCompanyScreen();

		const companiesList = screen.getByTestId('companies-list');
		expect(companiesList).toBeInTheDocument();
	});

	test('Should render search bar', () => {
		renderCompanyScreen();

		const searchBar = screen.getByTestId('search-bar');
		expect(searchBar).toBeInTheDocument();
	});

	test('Should navigate to new company screen when "new" button pressed', () => {
		const history = renderCompanyScreen();

		const newCompanyButton = screen.getByTestId('new-company-button');

		userEvent.click(newCompanyButton, leftClick);

		expect(history.location.pathname).toBe(NEW_COMPANY_ROUTE);
	});
});