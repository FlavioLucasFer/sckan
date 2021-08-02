import './Home.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

import FeatureCard from './components/FeatureCard';
import CardPanel from 'core/components/CardPanel';
import Icon from 'core/components/Icon';
import { COMPANY_FORM_ROUTE, COMPANY_ROUTE, PROJECT_FORM_ROUTE, PROJECT_ROUTE, SPRINT_FORM_ROUTE, SPRINT_ROUTE, TASK_FORM_ROUTE, TASK_ROUTE, USER_FORM_ROUTE, USER_ROUTE } from 'core/utils/routes';

function Home() {
	const { push } = useHistory();

	const userName = 'Flavio'

	return (
		<div>
			<h2 className='screen-title grey-text text-darken-3'>Welcome back, {userName}!</h2>

			<section>
				<h5>What do you want to do?</h5>

				<div className="row">
					<div className="col s12 m6 xl4">
						<FeatureCard title="Tasks"
							featureIcon="task">
							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="green accent-4"
								tooltip="Add new task"
								onClick={() => push(TASK_FORM_ROUTE)}>
								<Icon className="action-icon"
									size="medium"
									color="white-text">
									add
								</Icon>
							</CardPanel>

							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="light-blue"
								tooltip="Tasks list"
								onClick={() => push(TASK_ROUTE)}>
								<Icon className="action-icon"
									size="medium"
									color="white-text">
									list
								</Icon>
							</CardPanel>
						</FeatureCard>
					</div>

					<div className="col s12 m6 xl4">
						<FeatureCard title="Users"
							featureIcon="manage_accounts">
							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="green accent-4"
								tooltip="Add new user"
								onClick={() => push(USER_FORM_ROUTE)}>
								<Icon className="action-icon"
									size="medium"
									color="white-text">
									add
								</Icon>
							</CardPanel>

							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="light-blue"
								tooltip="Users list"
								onClick={() => push(USER_ROUTE)}>
								<Icon className="action-icon"
									size="medium"
									color="white-text">
									list
								</Icon>
							</CardPanel>
						</FeatureCard>
					</div>

					<div className="col s12 m6 xl4">
						<FeatureCard title="Companies"
							featureIcon="business">
							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="green accent-4"
								tooltip="Add new company"
								onClick={() => push(COMPANY_FORM_ROUTE)}>
								<Icon className="action-icon" 
									size="medium"
									color="white-text">
									add
								</Icon>
							</CardPanel>

							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="light-blue"
								tooltip="Companies list"
								onClick={() => push(COMPANY_ROUTE)}>
								<Icon className="action-icon" 
									size="medium"
									color="white-text">
									list
								</Icon>
							</CardPanel>
						</FeatureCard>
					</div>
					
					<div className="col s12 m6 xl4">
						<FeatureCard title="Sprints"
							featureIcon="wysiwyg">
							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="green accent-4"
								tooltip="Add new sprint"
								onClick={() => push(SPRINT_FORM_ROUTE)}>
								<Icon className="action-icon" 
									size="medium"
									color="white-text">
									add
								</Icon>
							</CardPanel>

							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="light-blue"
								tooltip="Sprints list"
								onClick={() => push(SPRINT_ROUTE)}>
								<Icon className="action-icon" 
									size="medium"
									color="white-text">
									list
								</Icon>
							</CardPanel>
						</FeatureCard>
					</div>

					<div className="col s12 m6 xl4">
						<FeatureCard title="Projects"
							featureIcon="source">
							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="green accent-4"
								tooltip="Add new project"
								onClick={() => push(PROJECT_FORM_ROUTE)}>
								<Icon className="action-icon"
									size="medium"
									color="white-text">
									add
								</Icon>
							</CardPanel>

							<CardPanel cardClassName="waves-effect waves-light action-card"
								backgroundColor="light-blue"
								tooltip="Projects list"
								onClick={() => push(PROJECT_ROUTE)}>
								<Icon className="action-icon"
									size="medium"
									color="white-text">
									list
								</Icon>
							</CardPanel>
						</FeatureCard>
					</div>

					<CardPanel cardClassName="s12 m2 waves-effect waves-light"
						backgroundColor="grey lighten-4"
						tooltip="Settings">
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