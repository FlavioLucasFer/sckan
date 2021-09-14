import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { uniqueId } from 'lodash';

import inputMaskApplier from 'core/utils/inputMaskApplier';
import inputValidator from 'core/utils/inputValidator';
import Icon from 'core/components/Icon';

TextInput.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	inputClassName: PropTypes.string,
	icon: PropTypes.string,
	iconClick: PropTypes.func,
	validate: PropTypes.bool,
	validateBy: PropTypes.string,
	mandatory: PropTypes.bool,
	mask: PropTypes.string,
	dataError: PropTypes.string,
	dataSuccess: PropTypes.string,
};

function TextInput(props) {
	const {
		title,
		value,
		className,
		inputClassName,
		icon,
		iconClick,
		validate,
		validateBy,
		mandatory,
		mask,
		dataError,
		dataSuccess,
		...rest
	} = props;

	const id = uniqueId('text-input-');
	const labelId = uniqueId('text-input-label-');
	const iconId = uniqueId('text-input-icon-');
	const helperTextId = uniqueId('text-input-helper-text-');

	const [firstFocus, setfirstFocus] = useState(false);
	const [helperMessage, setHelperMessage] = useState(mandatory ? '* This field is mandatory' : '');

	useEffect(() => {
		M.updateTextFields();
	}, []);

	useEffect(() => {
		if (validate && firstFocus) {
			if (!mandatory && (value && value.toString().trim() === ''));
			else {
				$(`#${id}`).removeClass('valid invalid');
				$(`#${id}`).addClass(isValid() ? 'valid' : 'invalid');
				$(`#${iconId}`).removeClass('green-text red-text teal-text');
				$(`#${iconId}`).addClass(isValid() ? 'green-text' : 'red-text');
				$(`#${helperTextId}`).removeClass('green-text red-text');
				$(`#${helperTextId}`).addClass(isValid() ? 'green-text' : 'red-text');
			}
		}
	});

	function isValid() {
		let isValid = true;
		let helperMessage = '';

		if (!validate)
			return true;

		else if (mandatory && (value && value.toString().trim() === '')) {
			helperMessage = '* This field is mandatory';
			isValid = false;
		}

		else if (validateBy) {
			const [valid, errorMessage] = inputValidator(validateBy, value);
			isValid = valid;
			helperMessage = errorMessage;
		} 

		setHelperMessage(helperMessage);
		return isValid;
	}

	function handleFocus() {
		if (!firstFocus) 
			setfirstFocus(true);
	
		$(`#${labelId}`).addClass('active');

		$(`#${iconId}`).removeClass('grey-text');
		$(`#${iconId}`).addClass(isValid() ? 'teal-text' : 'red-text');
	}
	
	function handleBlur() {
		if (!value) {
			$(`#${labelId}`).removeClass('active');
		}
		
		$(`#${iconId}`).removeClass(isValid() ? 'teal-text' : 'red-text');
		$(`#${iconId}`).addClass('grey-text');
	}

	function renderIcon() {
		if (!icon)
			return null;

		return (
			<Icon id={iconId}
				className={`prefix ${iconClick && 'pinter-cursor'}`}
				color="grey-text"
				onClick={iconClick && iconClick}>
				{icon}
			</Icon>
		);
	}

	function renderHelperMessage() {
		if (!helperMessage)
			return null;

		return (
			<span id={helperTextId}
				className="helper-text bold-text"
				data-error={dataError}
				data-success={dataSuccess}>
				{helperMessage}
			</span>
		);
	}

	return (
		<div className={`input-field ${className}`}>
			{renderIcon()}

			<input {...rest} 
				id={id}
				value={mask ? inputMaskApplier(mask, value) : value}
				className={inputClassName}
				onFocus={handleFocus}
				onBlur={handleBlur} />

			<label id={labelId} htmlFor={id}>{title}</label>

			{renderHelperMessage()}
		</div>
	);
}

export default TextInput;