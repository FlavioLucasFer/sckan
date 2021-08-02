import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
	HOME_ROUTE,
	LOGIN_ROUTE,
	COMPANY_ROUTE,
	PROJECT_ROUTE,
	SPRINT_ROUTE,
	TASK_ROUTE,
	USER_ROUTE,
	COMPANY_FORM_ROUTE,
	PROJECT_FORM_ROUTE,
	SPRINT_FORM_ROUTE,
	USER_FORM_ROUTE,
} from 'core/utils/routes';

import Header from 'features/app/components/Header';
import SideNavBar from 'features/app/components/SideNavBar';

import Home from 'features/home/Home';
import Login from 'features/login/Login';
import Companies from 'features/company/screens/Companies';
import Projects from 'features/project/screens/Projects';
import Sprints from 'features/sprint/screens/Sprints';
import Task from 'features/task/Task';
import Users from 'features/user/screens/Users';

import CompanyForm from 'features/company/screens/CompanyForm';
import ProjectForm from 'features/project/screens/ProjectForm';
import SprintForm from 'features/sprint/screens/SprintForm';
import UserForm from 'features/user/screens/UserForm';

function App() {
	return (
		<Router data-testid='router'>
			{/*Login route*/}
			<Route path={LOGIN_ROUTE} component={Login} data-testid='login-screen-route' />
			
			<Header data-testid='header' />
			
			<div className="row" style={{ height: '100%' }}>
				<nav id="sidenav" className="col s0 m3 l2 white" style={{ marginTop: '2px' }}>
					<SideNavBar />
				</nav>

				<main id="main" className="col s12 m9 l10">
					<div className="container">
						<Route path="/" component={App}>
							{/*Home route*/}
							<Route exact path={HOME_ROUTE} component={Home} data-testid='home-screen-route' />
							
							{/*Companies routes*/}
							<Route path={COMPANY_ROUTE} data-testid='companies-screen-route'>
								<Route exact path={COMPANY_ROUTE} component={Companies} data-testid='companies-screen-route' />
								<Route exact path={COMPANY_FORM_ROUTE} component={CompanyForm} data-testid='company-form-route' />
							</Route>

							{/*Users routes*/}
							<Route path={USER_ROUTE} data-testid='users-screen-route'>
								<Route exact path={USER_ROUTE} component={Users} data-testid='users-screen-route' />
								<Route exact path={USER_FORM_ROUTE} component={UserForm} data-testid='users-screen-route' />
							</Route>
							
							{/*Projects routes*/}
							<Route path={PROJECT_ROUTE} data-testid='projects-screen-route'>
								<Route exact path={PROJECT_ROUTE} component={Projects} data-testid='projects-screen-route' />
								<Route exact path={PROJECT_FORM_ROUTE} component={ProjectForm} data-testid='project-form-screen-route' />
							</Route>

							{/*Sprints routes*/}
							<Route path={SPRINT_ROUTE} data-testid='sprints-screen-route'>
								<Route exact path={SPRINT_ROUTE} component={Sprints} data-testid='sprints-screen-route' />
								<Route exact path={SPRINT_FORM_ROUTE} component={SprintForm} data-testid='sprints-form-screen-route' />
							</Route>
							
							{/*Tasks routes*/}
							<Route path={TASK_ROUTE} data-testid='tasks-screen-route'>
								<Route exact path={TASK_ROUTE} component={Task} data-testid='tasks-screen-route' />
							</Route>
						</Route>
					</div>
				</main>
			</div>

		</Router>
	);
}

export default App;
