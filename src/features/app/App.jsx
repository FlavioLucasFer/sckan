import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
	LOGIN_ROUTE,
	COMPANY_ROUTE,
	PROJECT_ROUTE,
	SPRINT_ROUTE,
	TASK_ROUTE,
	USER_ROUTE,
} from 'core/utils/routes';

import Header from 'features/app/components/Header';

import Login from 'features/login/Login';
import Company from 'features/company/Company';
import Project from 'features/project/Project';
import Sprint from 'features/sprint/Sprint';
import Task from 'features/task/Task';
import User from 'features/user/User';

function App() {
	return (
		<Router data-testid='router'>
			<Header data-testid='header' />

			<Route exact path={LOGIN_ROUTE} component={Login} data-testid='login-screen-route' />
			<Route path={COMPANY_ROUTE} component={Company} data-testid='companies-screen-route' />
			<Route path={PROJECT_ROUTE} component={Project} data-testid='projects-screen-route' />
			<Route path={SPRINT_ROUTE} component={Sprint} data-testid='sprints-screen-route' />
			<Route path={TASK_ROUTE} component={Task} data-testid='tasks-screen-route' />
			<Route path={USER_ROUTE} component={User} data-testid='users-screen-route' />
		</Router>
	);
}

export default App;
