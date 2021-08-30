import './Home.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { 
	COMPANY_FORM_ROUTE, 
	COMPANY_ROUTE, 
	PROJECT_FORM_ROUTE, 
	PROJECT_ROUTE, 
	SPRINT_FORM_ROUTE, 
	SPRINT_ROUTE, 
	TASK_ROUTE, 
	USER_FORM_ROUTE, 
	USER_ROUTE, 
	USER_SITTINGS, 
} from 'core/utils/routes';

import isScrumMaster from 'core/helpers/isScrumMaster';
import CardPanel from 'core/components/CardPanel';
import isAdmin from 'core/helpers/isAdmin';
import Icon from 'core/components/Icon';

import FeatureCard from 'features/home/components/FeatureCard';

import { setCurrentScreen } from 'redux/reducers/currentScreen';

function Home() {
	const dispatch = useDispatch();
	const { push } = useHistory();
	const user = useSelector(state => state.user.value);

	return (
		<div>
			<h2 className='screen-title grey-text text-darken-3'>Welcome back, {user.name}!</h2>

			<section>
				<h5>What do you want to do?</h5>

				<div className="row">
					<div className="col s12 m6 xl4">
						<FeatureCard title="Tasks"
							featureIcon="task">
							<CardPanel id="tasks-list-card"
								cardClassName="waves-effect waves-light action-card"
								backgroundColor="light-blue"
								tooltip="Tasks list"
								onClick={() => {
									push(TASK_ROUTE);
									dispatch(setCurrentScreen(TASK_ROUTE));
								}}>
								<Icon className="action-icon"
									size="medium"
									color="white-text">
									list
								</Icon>
							</CardPanel>
						</FeatureCard>
					</div>

					{isAdmin(user) ? 
						<div className="col s12 m6 xl4">
							<FeatureCard title="Users"
								featureIcon="manage_accounts">
								<CardPanel id="add-user-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="green accent-4"
									tooltip="Add new user"
									onClick={() => {
										push(USER_FORM_ROUTE);
										dispatch(setCurrentScreen(USER_FORM_ROUTE));
									}}>
									<Icon className="action-icon"
										size="medium"
										color="white-text">
										add
									</Icon>
								</CardPanel>

								<CardPanel id="users-list-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="light-blue"
									tooltip="Users list"
									onClick={() => {
										push(USER_ROUTE);
										dispatch(setCurrentScreen(USER_ROUTE));
									}}>
									<Icon className="action-icon"
										size="medium"
										color="white-text">
										list
									</Icon>
								</CardPanel>
							</FeatureCard>
						</div>
					:
						null
					}

					{isAdmin(user) ?
						<div className="col s12 m6 xl4">
							<FeatureCard title="Companies"
								featureIcon="business">
								<CardPanel id="add-company-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="green accent-4"
									tooltip="Add new company"
									onClick={() => {
										push(COMPANY_FORM_ROUTE);
										dispatch(setCurrentScreen(COMPANY_FORM_ROUTE));
									}}>
									<Icon className="action-icon" 
										size="medium"
										color="white-text">
										add
									</Icon>
								</CardPanel>

								<CardPanel id="companies-list-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="light-blue"
									tooltip="Companies list"
									onClick={() => {
										push(COMPANY_ROUTE);
										dispatch(setCurrentScreen(COMPANY_ROUTE));
									}}>
									<Icon className="action-icon" 
										size="medium"
										color="white-text">
										list
									</Icon>
								</CardPanel>
							</FeatureCard>
						</div>
					:
						null
					}
					
					{isAdmin(user) || isScrumMaster(user) ?
						<div className="col s12 m6 xl4">
							<FeatureCard title="Sprints"
								featureIcon="wysiwyg">
								<CardPanel id="add-sprint-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="green accent-4"
									tooltip="Add new sprint"
									onClick={() => {
										push(SPRINT_FORM_ROUTE);
										dispatch(setCurrentScreen(SPRINT_FORM_ROUTE));
									}}>
									<Icon className="action-icon" 
										size="medium"
										color="white-text">
										add
									</Icon>
								</CardPanel>

								<CardPanel id="sprints-list-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="light-blue"
									tooltip="Sprints list"
									onClick={() => {
										push(SPRINT_ROUTE);
										dispatch(setCurrentScreen(SPRINT_ROUTE));
									}}>
									<Icon className="action-icon" 
										size="medium"
										color="white-text">
										list
									</Icon>
								</CardPanel>
							</FeatureCard>
						</div>
					:
						null
					}

					{isAdmin(user) || isScrumMaster(user) ?
						<div className="col s12 m6 xl4">
							<FeatureCard title="Projects"
								featureIcon="source">
								<CardPanel id="add-project-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="green accent-4"
									tooltip="Add new project"
									onClick={() => {
										push(PROJECT_FORM_ROUTE);
										dispatch(setCurrentScreen(PROJECT_FORM_ROUTE));
									}}>
									<Icon className="action-icon"
										size="medium"
										color="white-text">
										add
									</Icon>
								</CardPanel>

								<CardPanel id="projects-list-card"
									cardClassName="waves-effect waves-light action-card"
									backgroundColor="light-blue"
									tooltip="Projects list"
									onClick={() => {
										push(PROJECT_ROUTE);
										dispatch(setCurrentScreen(PROJECT_ROUTE));
									}}>
									<Icon className="action-icon"
										size="medium"
										color="white-text">
										list
									</Icon>
								</CardPanel>
							</FeatureCard>
						</div>
					:
						null
					}

					<CardPanel id="user-settings-card"
						cardClassName="s12 m2 waves-effect waves-light"
						backgroundColor="grey lighten-4"
						tooltip="Settings"
						onClick={() => {
							push(USER_SITTINGS);
							dispatch(setCurrentScreen(USER_SITTINGS));
						}}>
						<Icon type="round" 
							size="large"
							color="grey-text text-darken-3">
							settings
						</Icon>
					</CardPanel>
				</div>
			</section>
		</div>
	);
}

export default Home;
