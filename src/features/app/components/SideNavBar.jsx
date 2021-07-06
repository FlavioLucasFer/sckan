import React from 'react';
import { useHistory } from 'react-router-dom';
import { SideNav, SideNavItem, Icon } from 'react-materialize';

import { 
	COMPANY_ROUTE, 
	LOGIN_ROUTE, 
	PROJECT_ROUTE, 
	SPRINT_ROUTE, 
	TASK_ROUTE, 
	USER_ROUTE,
} from 'core/utils/routes';

import { AppNameDiv, AppNameH1 } from './StyledComponents';

function SideNavBar() {
	const { push } = useHistory();

	return (
		<SideNav id='side-navbar'
			data-testid='side-navbar'>
			<AppNameDiv>
				<AppNameH1>
					Sckan
				</AppNameH1>
			</AppNameDiv>
			
			<SideNavItem waves
				data-testid='users-sidenav-item'
				href={USER_ROUTE}
				icon={<Icon small>manage_accounts</Icon>}
				onClick={() => push(USER_ROUTE)}>
				Users
			</SideNavItem>

			<SideNavItem waves
				data-testid='companies-sidenav-item'
				href={COMPANY_ROUTE}
				icon={<Icon small>business</Icon>}
				onClick={() => push(COMPANY_ROUTE)}>
				Companies
			</SideNavItem>

			<SideNavItem waves
				data-testid='tasks-sidenav-item'
				href={TASK_ROUTE}
				icon={<Icon small>task</Icon>}
				onClick={() => push(TASK_ROUTE)}>
				Tasks
			</SideNavItem>

			<SideNavItem waves
				data-testid='sprints-sidenav-item'
				href={SPRINT_ROUTE}
				icon={<Icon small>wysiwyg</Icon>}
				onClick={() => push(SPRINT_ROUTE)}>
				Sprints
			</SideNavItem>

			<SideNavItem waves
				data-testid='projects-sidenav-item'
				href={PROJECT_ROUTE}
				icon={<Icon small>source</Icon>}
				onClick={() => push(PROJECT_ROUTE)}>
				Projects
			</SideNavItem>

			<SideNavItem divider />

			<SideNavItem waves
				data-testid='logout-sidenav-item'
				href={LOGIN_ROUTE}
				icon={<Icon small>logout</Icon>}
				onClick={() => push(LOGIN_ROUTE)}>
				Log-out
			</SideNavItem>
		</SideNav>
	);
}

export default SideNavBar;