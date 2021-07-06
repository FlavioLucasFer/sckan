import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

import { SECUNDARY_COLOR } from 'core/utils/constants';
import { LOGIN_ROUTE } from 'core/utils/routes';

import SideNavBar from './SideNavBar';

function Header() {
	const { pathname } = useLocation();

	if (pathname != LOGIN_ROUTE) {
		return (
			<Navbar alignLinks="right"
				data-testid='navbar'
				style={{ height: '50px', lineHeight: '50px', backgroundColor: SECUNDARY_COLOR }}
				menuIcon={
					<Icon id='open-menu-icon' large>
						{window.innerWidth > 768 ? 'view_sidebar' : 'menu'}
					</Icon>
				}
				sidenav={<SideNavBar />}
				options={{
					edge: 'left',
					preventScrolling: true
				}} >
			</Navbar>
		);
	}

	return null;
}

export default Header;