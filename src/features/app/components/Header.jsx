import './css/Header.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Icon from 'core/components/Icon';
import { HOME_ROUTE } from 'core/utils/routes';

function Header() {
	const { push } = useHistory();

	function handleLogoClick() {
		push(HOME_ROUTE);
	}

	return (
		<nav data-testid="navbar" className="white" style={{ height: '50px' }}>
			<div className="nav-wrapper">
				<a data-testid="app-logo" className="brand-logo center grey-text text-darken-3"
					onClick={handleLogoClick}>
					Sckan
				</a>
				<ul className="right hide-on-med-and-down nav-ul">
					<li data-testid="user-account">
						<Icon type="round" 
							size="small"
							color="grey-text text-darken-3">
							account_circle
						</Icon>
					</li>

					<li data-testid="more-options">
						<Icon type="round"
							size="small"
							color="grey-text text-darken-3">
							more_vert
						</Icon>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
