import './css/SideNavBar.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

import LogOutModal from '../modals/LogOutModal';

const Divider = () => <li className="divider"></li>;

SideNavItem.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	first: PropTypes.bool,
};

function SideNavItem(props) {
	const { push } = useHistory();
	const { pathname } = useLocation();

	const {
		route, 
		label, 
		icon, 
		first,
		...rest
	} = props;

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
		<li {...rest}
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

function SideNavBar() {
	return (
		<ul id="sidenav" data-testid="sidenav">
			<SideNavItem route={HOME_ROUTE}
				label="Home"
				icon="home"
				data-testid="home-sidenav-item"
				first />

			<SideNavItem route={USER_ROUTE}
				label="Users"
				icon="manage_accounts"
				data-testid="users-sidenav-item" />

			<SideNavItem route={COMPANY_ROUTE}
				label="Companies"
				icon="business"
				data-testid="companies-sidenav-item" />

			<SideNavItem route={TASK_ROUTE}
				label="Tasks"
				icon="task"
				data-testid="tasks-sidenav-item" />

			<SideNavItem route={SPRINT_ROUTE}
				label="Sprints"
				icon="wysiwyg"
				data-testid="sprints-sidenav-item" />

			<SideNavItem route={PROJECT_ROUTE}
				label="Projects"
				icon="source"
				data-testid="projects-sidenav-item" />

			<Divider />

			<a className="modal-trigger" href="#logout-modal">
				<SideNavItem label="Log-out"
					icon="logout"
					data-testid="logout-sidenav-item" />
			</a>
			
			<LogOutModal id="logout-modal" />
		</ul>
	);
}

export default SideNavBar;
