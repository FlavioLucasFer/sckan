import 'materialize-css';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Header from './Header';

describe('Header component tests', () => {
	test('Should render NavBar', () => {
		const history = createMemoryHistory();
		history.push('/users');

		render(
			<Router history={history}>
				<Header />
			</Router>
		);

		const navbar = screen.getByTestId('navbar');
		
		expect(navbar).toBeInTheDocument();
	});

	test('Should not render NavBar', () => {
		const history = createMemoryHistory();
		history.push('/');

		render(
			<Router history={history}>
				<Header />
			</Router>
		);

		const navbar = screen.queryByTestId('navbar');

		expect(navbar).not.toBeInTheDocument();
	});

});