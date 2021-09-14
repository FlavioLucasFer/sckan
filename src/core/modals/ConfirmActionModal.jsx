import './ConfirmActionModal.css';
import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'core/components/Modal';

ConfirmActionModal.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onConfirm: PropTypes.func.isRequired,
	onCancel: PropTypes.func,
};

function ConfirmActionModal(props) {
	const {
		title,
		id,
		onConfirm,
		onCancel,
	} = props;

	const actions = [{
		id: 'confirm-action',
		title: 'Yes',
		className: 'modal-close waves-green',
		onClick: () => onConfirm(),
	}, {
		id: 'deny-action',
		title: 'No',
		className: 'modal-close waves-red',
		onClick: () => onCancel && onCancel(),
	}];

	return (
		<Modal id={id} 
			title={title} 
			actions={actions}
			className="confirm-action-modal-height" />
	);
}

export default ConfirmActionModal;