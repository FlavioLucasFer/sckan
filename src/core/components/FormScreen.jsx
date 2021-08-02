import './css/FormScreen.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import CardPanel from 'core/components/CardPanel';
import TextInput from 'core/components/TextInput';
import Button from 'core/components/Button';
import ConfirmActionModal from 'core/modals/ConfirmActionModal';

FormScreen.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string,
	children: PropTypes.element,
}

function FormScreen(props) {
	const { 
		title,
		id,
		children,
	} = props;

	const { goBack } = useHistory();

	function handleSave() {
		goBack();
	}

	function handleDiscard() {
		goBack();
	}

	return (
		<section>
			<h2 className="screen-title grey-text text-darken-3">
				{id ? `Edit ${title.toLowerCase()}` : `New ${title.toLowerCase()}`}
			</h2>

			<CardPanel className="s12 div-card-container"
				cardClassName="card-container">
				<div className="row" style={{ height: '100%' }}>
					<form className="col s12 screen-form" style={{ height: '90%' }}>
						{id &&
							<div className="col s12 no-padding">
								<TextInput value={`#${id}`}
									className="col s4 no-padding"
									inputClassName="bold-text grey-text text-darken-2"
									disabled />
							</div>
						}
						{children}
					</form>
					<div className="col s12" style={{ height: '10%' }} >
						<div className="row buttons-row">
							<a className="modal-trigger" 
								href={id && '#confirm-save-modal'}
								onClick={!id && handleSave}>
								<Button title="Save"
									className="bold-text"
									color="teal accent-4"
									icon={{
										name: 'done',
										className: 'right',
									}} />
							</a>
							<a className="modal-trigger" 
								href="#confirm-discard-modal"
								style={{ marginLeft: '10px' }}>
								<Button title="Discard"
									className="bold-text"
									color="red accent-2"
									icon={{
										name: 'cancel',
										className: 'right',
									}} />
							</a>
						</div>
					</div>
				</div>
			</CardPanel>

			<ConfirmActionModal id="confirm-save-modal"
				title="Are you sure you want to save changes?"
				onConfirm={handleSave} />
			<ConfirmActionModal id="confirm-discard-modal"
				title="Are you sure you want to discard changes?"
				onConfirm={handleDiscard} />
		</section>
	);
}

export default FormScreen;