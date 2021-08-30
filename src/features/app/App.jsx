import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

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

import isScrumMaster from 'core/helpers/isScrumMaster';
import isAdmin from 'core/helpers/isAdmin';

import CompanyForm from 'features/company/screens/CompanyForm';
import ProjectForm from 'features/project/screens/ProjectForm';
import SideNavBar from 'features/app/components/SideNavBar';
import SprintForm from 'features/sprint/screens/SprintForm';
import Companies from 'features/company/screens/Companies';
import Projects from 'features/project/screens/Projects';
import Sprints from 'features/sprint/screens/Sprints';
import UserForm from 'features/user/screens/UserForm';
import Header from 'features/app/components/Header';
import Users from 'features/user/screens/Users';
import Login from 'features/login/Login';
import Tasks from 'features/task/Tasks';
import Home from 'features/home/Home';

function App() {
	const user = useSelector(state => state.user.value);
	const currentScreen = useSelector(state => state.currentScreen.value);

	return (
		<Router data-testid='router'>
			<Route path="/">
				{user.token ? 
					<Redirect to={currentScreen} />
				:
					<Redirect to={LOGIN_ROUTE} />
				}
			</Route>
			{/*Login route*/}
			<Route exact path={LOGIN_ROUTE} component={Login}/>
			
			<Header data-testid='header' />
			
			<div className="row" style={{ height: '100%'}}>
				<nav id="sidenav" className="col s0 m3 l2 white">
					<SideNavBar />
				</nav>

				<main id="main">
					{/*Tasks routes*/}
					<Route path={TASK_ROUTE}>
						<Route exact 
							path={TASK_ROUTE} 
							component={Tasks}/>
					</Route>
					<div className="container">
						{/*Home route*/}
						<Route exact 
							path={HOME_ROUTE} 
							component={Home}/>
						
						{/*Companies routes*/}
						<Route path={COMPANY_ROUTE}>
							<Route exact 
								path={COMPANY_ROUTE} 
								render={props => isAdmin(user) ? (
									<Companies {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />

							<Route exact 
								path={COMPANY_FORM_ROUTE} 
								render={props => isAdmin(user) ? (
									<CompanyForm {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />
						</Route>

						{/*Users routes*/}
						<Route path={USER_ROUTE}>
							<Route exact 
								path={USER_ROUTE} 
								render={props => isAdmin(user) ? (
									<Users {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />

							<Route exact 
								path={USER_FORM_ROUTE} 
								render={props => isAdmin(user) ? (
									<UserForm {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />
						</Route>
						
						{/*Projects routes*/}
						<Route path={PROJECT_ROUTE}>
							<Route 
								exact 
								path={PROJECT_ROUTE} 
								render={props => isAdmin(user) || isScrumMaster(user) ? (
									<Projects {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />

							<Route exact 
								path={PROJECT_FORM_ROUTE} 
								render={props => isAdmin(user) || isScrumMaster(user) ? (
									<ProjectForm {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />
						</Route>

						{/*Sprints routes*/}
						<Route path={SPRINT_ROUTE}>
							<Route exact 
								path={SPRINT_ROUTE} 
								render={props => isAdmin(user) || isScrumMaster(user) ? (
									<Sprints {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />

							<Route exact 
								path={SPRINT_FORM_ROUTE} 
								render={props => isAdmin(user) || isScrumMaster(user) ? (
									<SprintForm {...props} />
								) : (
									<Redirect to={{ pathname: HOME_ROUTE }} />
								)} />
						</Route>
					</div>
				</main>
			</div>

		</Router>
	);
}

export default App;
