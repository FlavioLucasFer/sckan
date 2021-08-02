import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { LOGIN_ROUTE } from 'core/utils/routes';
import ConfirmActionModal from 'core/modals/ConfirmActionModal';

LogOutModal.propTypes = {
	id: PropTypes.string.isRequired,
};

function LogOutModal({ id }) {
	const { push } = useHistory();

	function handleConfirm() {
		push(LOGIN_ROUTE);
	}

	return (
		<ConfirmActionModal id={id}
			title="Are you sure you want logout?" 
			onConfirm={handleConfirm} />
	);
}

export default LogOutModal;