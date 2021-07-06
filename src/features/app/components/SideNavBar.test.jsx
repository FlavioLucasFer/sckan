import 'materialize-css';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event'

import { 
	COMPANY_ROUTE, 
	LOGIN_ROUTE, 
	PROJECT_ROUTE, 
	SPRINT_ROUTE, 
	TASK_ROUTE, 
	USER_ROUTE,
} from 'core/utils/routes';

import SideNavBar from './SideNavBar';

describe('SideNavBar component render tests', () => {
	test('Should render SideNavBar', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const sideNavbar = screen.getByTestId('side-navbar');

		expect(sideNavbar).toBeInTheDocument();
	});

	test('Should render "Sckan" text on H1 tag', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const appName = screen.getByText('Sckan');

		expect(appName).toBeInTheDocument();
	});

	test('Should render Users SideNavItem', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const usersNavNavItem = screen.getByTestId('users-sidenav-item');

		expect(usersNavNavItem).toBeInTheDocument();
	});

	test('Should render Companies SideNavItem', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const companiesSideNavItem = screen.getByTestId('companies-sidenav-item');

		expect(companiesSideNavItem).toBeInTheDocument();
	});

	test('Should render Tasks SideNavItem', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const tasksSideNavItem = screen.getByTestId('tasks-sidenav-item');

		expect(tasksSideNavItem).toBeInTheDocument();
	});

	test('Should render Sprints SideNavItem', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const sprintsSideNavItem = screen.getByTestId('sprints-sidenav-item');

		expect(sprintsSideNavItem).toBeInTheDocument();
	});

	test('Should render Projects SideNavItem', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const projectsSideNavItem = screen.getByTestId('projects-sidenav-item');

		expect(projectsSideNavItem).toBeInTheDocument();
	});

	test('Should render Log-out SideNavItem', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);

		const logoutSideNavItem = screen.getByTestId('logout-sidenav-item');

		expect(logoutSideNavItem).toBeInTheDocument();
	});
});

const leftClick = { button: 0 };

describe('SideNavBar component routes tests', () => {
	test('Should navigate to users screen', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);
		
		const usersSideNavItem = screen.getByTestId('users-sidenav-item');

		userEvent.click(usersSideNavItem, leftClick);

		expect(history.location.pathname).toBe(USER_ROUTE);
	});

	test('Should navigate to companies screen', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);
		
		const companiesSideNavItem = screen.getByTestId('companies-sidenav-item');

		userEvent.click(companiesSideNavItem, leftClick);

		expect(history.location.pathname).toBe(COMPANY_ROUTE);
	});

	test('Should navigate to tasks screen', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);
		
		const tasksSideNavItem = screen.getByTestId('tasks-sidenav-item');

		userEvent.click(tasksSideNavItem, leftClick);

		expect(history.location.pathname).toBe(TASK_ROUTE);
	});

	test('Should navigate to sprints screen', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);
		
		const sprintsSideNavItem = screen.getByTestId('sprints-sidenav-item');

		userEvent.click(sprintsSideNavItem, leftClick);

		expect(history.location.pathname).toBe(SPRINT_ROUTE);
	});

	test('Should navigate to projects screen', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);
		
		const projectsSideNavItem = screen.getByTestId('projects-sidenav-item');

		userEvent.click(projectsSideNavItem, leftClick);

		expect(history.location.pathname).toBe(PROJECT_ROUTE);
	});

	test('Should navigate to login screen on log-out', () => {
		const history = createMemoryHistory();

		render(
			<Router history={history}>
				<SideNavBar />
			</Router>
		);
		
		const logoutSideNavItem = screen.getByTestId('logout-sidenav-item');

		userEvent.click(logoutSideNavItem, leftClick);

		expect(history.location.pathname).toBe(LOGIN_ROUTE);
	});
});