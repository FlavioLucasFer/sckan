import './SideNavBar.css';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { 
	COMPANY_ROUTE, 
	HOME_ROUTE,  
	PROJECT_ROUTE, 
	SPRINT_ROUTE, 
	TASK_ROUTE, 
	USER_ROUTE,
} from 'core/utils/routes';

import Icon from 'core/components/Icon';
import LogOutModal, { id as logOutModalId } from '../modals/LogOutModal';

function SideNavBar() {
	const { push } = useHistory();
	const { pathname } = useLocation();

	function renderLi(label, icon, route, testeid, first=false) {
		const [iconColor, setIconColor] = useState('white-text');
		const isCurrentRoute = pathname === route;

		function handleMouseIn() {
			setIconColor('grey-text text-lighten-1');
		}

		function handleMouseOut() {
			setIconColor('white-text');
		}

		function handleClick() {
			if (route) 
				push(route);
		}

		return (
			<li data-testid={testeid} 
				className={`
					btn-flat 
					btn-large 
					waves-effect 
					waves-light 
					sidenav-li 
					${isCurrentRoute ? 'teal' : ''}
				`}
				onClick={handleClick}
				onMouseEnter={handleMouseIn}
				onMouseLeave={handleMouseOut}
				style={{ marginTop: first ? 0 : '2.5px' }}>
				<Icon className="left"
					type="round"
					color={isCurrentRoute ? 'teal-text text-accent-1' : 'grey-text text-darken-3'}>
						{icon}
				</Icon>

				<span className="sidenav-span">
					{label}
				</span>

				<Icon className="right li-icon"
					type="round"
					color={isCurrentRoute ? 'teal-text text-lighten-3' : iconColor}>
						{icon}
				</Icon>
			</li>
		);
	}

	function renderDivider() {
		return (
			<li className="divider"></li>
		);
	}

	return (
		<ul id="sidenav" data-testid="sidenav">
			{renderLi('Home', 'home', HOME_ROUTE, 'home-sidenav-item', true)}
			{renderLi('Users', 'manage_accounts', USER_ROUTE, 'users-sidenav-item')}
			{renderLi('Companies', 'business', COMPANY_ROUTE, 'companies-sidenav-item')}
			{renderLi('Tasks', 'task', TASK_ROUTE, 'tasks-sidenav-item')}
			{renderLi('Sprints', 'wysiwyg', SPRINT_ROUTE, 'sprints-sidenav-item')}
			{renderLi('Projects', 'source', PROJECT_ROUTE, 'projects-sidenav-item')}
			{renderDivider()}
			<a className="modal-trigger" href={`#${logOutModalId}`}>
				{renderLi('Log-out', 'logout', null, 'logout-sidenav-item')}
			</a>
			
			<LogOutModal />
		</ul>
	);
}

export default SideNavBar;