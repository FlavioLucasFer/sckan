import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Icon from './Icon';

TextArea.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	icon: PropTypes.string,
	length: PropTypes.string,
};

function TextArea(props) {
	const { 
		title, 
		className, 
		icon, 
		length,
		...rest 
	} = props;

	const id = uniqueId('text-area-');

	useEffect(() => {
		M.CharacterCounter.init(document.querySelectorAll('.materialize-textarea'));
	}, []);

	function renderIcon() {
		if (!icon)
			return null;

		return (
			<Icon className="prefix"
				color="grey-text">
				{icon}
			</Icon>
		);
	}

	return (
		<div className={`input-field ${className || ''}`}>
			{renderIcon()}
			<textarea {...rest} 
				id={id} 
				className="materialize-textarea"
				data-length={length}
				maxLength={length} />
			<label htmlFor={id}>{title}</label>
		</div>
	);
}

export default TextArea;
