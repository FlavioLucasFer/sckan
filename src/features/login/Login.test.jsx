import 'materialize-css';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import { TASK_ROUTE } from 'core/utils/routes';

import Login from './Login';

function renderLoginScreen() {
	const history = createMemoryHistory();

	render(
		<Router history={history}>
			<Login />
		</Router>
	);

	return history;
}

const leftClick = { button: 0 };

describe('Login screen tests', () => {
	test('Should render login identification input', () => {
		renderLoginScreen();

		const loginInput = screen.getByTestId('user-identification-input');
		expect(loginInput).toBeInTheDocument();
	});

	test('Should render password input', () => {
		renderLoginScreen();

		const passwordInput = screen.getByTestId('user-password-input');
		expect(passwordInput).toBeInTheDocument();
	});

	test('Should render sign-in button', () => {
		renderLoginScreen();

		const signInButton = screen.getByTestId('signin-button');
		expect(signInButton).toBeInTheDocument();
	});

	test('Should render app name', () => {
		renderLoginScreen();

		const appName = screen.getByTestId('app-name');
		expect(appName).toBeInTheDocument();
	});

	test('Should navigate to tasks screen when Sign-in button pressed', () => {
		const history = renderLoginScreen();

		const signInButton = screen.getByTestId('signin-button');

		userEvent.click(signInButton, leftClick);

		expect(history.location.pathname).toBe(TASK_ROUTE);
	});

});