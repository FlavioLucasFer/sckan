import { render, screen } from '@testing-library/react';
import 'materialize-css';
import Login from './Login';

describe('Login screen tests', () => {
	test('Should render login identification input', () => {
		render(<Login />);
		const loginInput = screen.getByTestId('user-identification-input');
		expect(loginInput).toBeInTheDocument();
	});

	test('Should render password input', () => {
		render(<Login />);
		const passwordInput = screen.getByTestId('user-password-input');
		expect(passwordInput).toBeInTheDocument();
	});

	test('Should render sign-in button', () => {
		render(<Login />);
		const signInButton = screen.getByTestId('login-button');
		expect(signInButton).toBeInTheDocument();
	});

	test('Should render app name', () => {
		render(<Login />);
		const appName = screen.getByTestId('app-name');
		expect(appName).toBeInTheDocument();
	});
});