import './css/Header.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Icon from 'core/components/Icon';
import { HOME_ROUTE } from 'core/utils/routes';

import { setCurrentScreen } from 'redux/reducers/currentScreen';

function Header() {
	const { push } = useHistory();
	const dispatch = useDispatch();

	function handleLogoClick() {
		push(HOME_ROUTE);
		dispatch(setCurrentScreen(HOME_ROUTE));
	}

	return (
		<nav data-testid="navbar" className="white" style={{ height: '50px' }}>
			<div className="nav-wrapper">
				<a data-testid="app-logo" className="brand-logo center grey-text text-darken-3"
					onClick={handleLogoClick}>
					Sckan
				</a>
				<ul className="right hide-on-med-and-down nav-ul">
					<li data-testid="user-account" style={{ height: '50px' }}>
						<Icon type="round" 
							size="small"
							color="grey-text text-darken-3"
							style={{ height: '50px' }}>
							account_circle
						</Icon>
					</li>

					<li data-testid="more-options" style={{ height: '50px' }}>
						<Icon type="round"
							size="small"
							color="grey-text text-darken-3"
							style={{ height: '50px' }}>
							more_vert
						</Icon>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
