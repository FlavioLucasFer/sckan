import 'materialize-css';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event'

import { 
	HOME_ROUTE, 
	COMPANY_ROUTE, 
	PROJECT_ROUTE, 
	SPRINT_ROUTE, 
	TASK_ROUTE, 
	USER_ROUTE,
} from 'core/utils/routes';

import SideNavBar from './SideNavBar';

function renderSideNavBar() {
	const history = createMemoryHistory();

	render(
		<Router history={history}>
			<SideNavBar />
		</Router>
	);

	return history;
}

describe('SideNavBar component render tests', () => {
	test('Should render SideNavBar', () => {
		renderSideNavBar();

		const sideNavbar = screen.getByTestId('sidenav');

		expect(sideNavbar).toBeInTheDocument();
	});

	test('Should render home SideNavItem', () => {
		renderSideNavBar();

		const homeSideNavItem = screen.getByTestId('home-sidenav-item');

		expect(homeSideNavItem).toBeInTheDocument();
	})

	test('Should render Users SideNavItem', () => {
		renderSideNavBar();

		const usersSideNavItem = screen.getByTestId('users-sidenav-item');

		expect(usersSideNavItem).toBeInTheDocument();
	});

	test('Should render Companies SideNavItem', () => {
		renderSideNavBar();

		const companiesSideNavItem = screen.getByTestId('companies-sidenav-item');

		expect(companiesSideNavItem).toBeInTheDocument();
	});

	test('Should render Tasks SideNavItem', () => {
		renderSideNavBar();

		const tasksSideNavItem = screen.getByTestId('tasks-sidenav-item');

		expect(tasksSideNavItem).toBeInTheDocument();
	});

	test('Should render Sprints SideNavItem', () => {
		renderSideNavBar();

		const sprintsSideNavItem = screen.getByTestId('sprints-sidenav-item');

		expect(sprintsSideNavItem).toBeInTheDocument();
	});

	test('Should render Projects SideNavItem', () => {
		renderSideNavBar();

		const projectsSideNavItem = screen.getByTestId('projects-sidenav-item');

		expect(projectsSideNavItem).toBeInTheDocument();
	});

	test('Should render Log-out SideNavItem', () => {
		renderSideNavBar();

		const logoutSideNavItem = screen.getByTestId('logout-sidenav-item');

		expect(logoutSideNavItem).toBeInTheDocument();
	});
});

const leftClick = { button: 0 };

describe('SideNavBar component routes tests', () => {
	test('Should navigate to home screen', () => {
		const history = renderSideNavBar();

		const homeSideNavItem = screen.getByTestId('home-sidenav-item');

		userEvent.click(homeSideNavItem, leftClick);

		expect(history.location.pathname).toBe(HOME_ROUTE);
	});

	test('Should navigate to users screen', () => {
		const history = renderSideNavBar();
		
		const usersSideNavItem = screen.getByTestId('users-sidenav-item');

		userEvent.click(usersSideNavItem, leftClick);

		expect(history.location.pathname).toBe(USER_ROUTE);
	});

	test('Should navigate to companies screen', () => {
		const history = renderSideNavBar();
		
		const companiesSideNavItem = screen.getByTestId('companies-sidenav-item');

		userEvent.click(companiesSideNavItem, leftClick);

		expect(history.location.pathname).toBe(COMPANY_ROUTE);
	});

	test('Should navigate to tasks screen', () => {
		const history = renderSideNavBar();
		
		const tasksSideNavItem = screen.getByTestId('tasks-sidenav-item');

		userEvent.click(tasksSideNavItem, leftClick);

		expect(history.location.pathname).toBe(TASK_ROUTE);
	});

	test('Should navigate to sprints screen', () => {
		const history = renderSideNavBar();
		
		const sprintsSideNavItem = screen.getByTestId('sprints-sidenav-item');

		userEvent.click(sprintsSideNavItem, leftClick);

		expect(history.location.pathname).toBe(SPRINT_ROUTE);
	});

	test('Should navigate to projects screen', () => {
		const history = renderSideNavBar();
		
		const projectsSideNavItem = screen.getByTestId('projects-sidenav-item');

		userEvent.click(projectsSideNavItem, leftClick);

		expect(history.location.pathname).toBe(PROJECT_ROUTE);
	});
});