import 'materialize-css';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { HOME_ROUTE } from 'core/utils/routes';

import Header from './Header';

function renderHeader() {
	const history = createMemoryHistory();

	render(
		<Router history={history}>
			<Header />
		</Router>
	);

	return history;
}

describe('Header component render tests', () => {
	test('Should render NavBar', () => {
		renderHeader();

		const navbar = screen.getByTestId('navbar');
		
		expect(navbar).toBeInTheDocument();
	});

	test('Should render app logo', () => {
		renderHeader();

		const appLogo = screen.getByTestId('app-logo');

		expect(appLogo).toBeInTheDocument();
	});

	test('Should render account nav item', () => {
		renderHeader();

		const accountNavItem = screen.getByTestId('user-account');

		expect(accountNavItem).toBeInTheDocument();
	});

	test('Should render more options nav item', () => {
		renderHeader();

		const moreOptionsNavItem = screen.getByTestId('more-options');

		expect(moreOptionsNavItem).toBeInTheDocument();
	});
});

const leftClick = { button: 0 };

describe('Header component routes tests', () => {
	test('Should navigate to home scrren', () => {
		const history = renderHeader();

		const appLogo = screen.getByTestId('app-logo');

		userEvent.click(appLogo, leftClick);

		expect(history.location.pathname).toBe(HOME_ROUTE);
	});
});

