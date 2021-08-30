import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ConfirmActionModal from 'core/modals/ConfirmActionModal';
import { LOGIN_ROUTE } from 'core/utils/routes';

import userService from 'features/user/domain/service';

import { setCurrentScreen } from 'redux/reducers/currentScreen';

LogOutModal.propTypes = {
	id: PropTypes.string.isRequired,
};

function LogOutModal({ id }) {
	const dispatch = useDispatch();
	const { push } = useHistory();

	async function handleConfirm() {
		try {
			await userService.logout();
		} catch (err) {
			console.log('err:', err);
		}

		push(LOGIN_ROUTE);
		dispatch(setCurrentScreen(LOGIN_ROUTE));
	}

	return (
		<ConfirmActionModal id={id}
			title="Are you sure you want logout?" 
			onConfirm={handleConfirm} />
	);
}

export default LogOutModal;