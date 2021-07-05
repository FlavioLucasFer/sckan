import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login screen tests', () => {
	test('Should render login identification input', () => {
		render(<Login />);
		const loginInput = screen.getByPlaceholderText('User or email');
		expect(loginInput).toBeInTheDocument();
	});

	test('Should render password input', () => {
		render(<Login />);
		const passwordInput = screen.getByPlaceholderText('Password');
		expect(passwordInput).toBeInTheDocument();
	});

	test('Should render sign-in button', () => {
		render(<Login />);
		const signInButton = screen.getByTitle('Sign-in');
		expect(signInButton).toBeInTheDocument();
	});

	test('Should render app name', () => {
		render(<Login />);
		const appName = screen.getByDisplayValue('Sckan');
		expect(appName).toBeInTheDocument();
	});
});