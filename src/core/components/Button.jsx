import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Icon from './Icon';

const elemId = uniqueId('button-');

Button.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	icon: PropTypes.object,
	tooltipPosition: PropTypes.string,
	tooltip: PropTypes.string,
	onClick: PropTypes.func,
};

function Button(props) {
	const {
		title,
		color,
		size,
		type,
		className,
		icon,
		tooltipPosition,
		tooltip,
		onClick,
		...rest
	} = props;

	
	useEffect(() => {
		M.Tooltip.init(document.querySelectorAll('.tooltipped'));
	}, []);

	function handleClick() {
		const elems = document.querySelectorAll('.tooltipped');

		for (let i = 0; i < elems.length; i++) {
			const tooltipInstance = M.Tooltip.getInstance(elems[i]);
			tooltipInstance.close();
		}

		if (onClick) {
			onClick();
		}
	}

	function renderIcon() {
		if (!icon)
			return null;

		return (
			<Icon {...icon}>
				{icon.name}
			</Icon>
		);
	}

	return (
		<a {...rest} 
			id={elemId}
			className={`
				${type ? `btn-${type}` : 'btn'}
				${size ? `btn-${size}` : 'btn-medium'} 
				${tooltip && 'tooltipped'}
				waves-effect waves-light 
				${color || 'white'}
				${className || ''}
			`}
			data-position={tooltipPosition || 'bottom'}
			data-tooltip={tooltip || ''}
			onClick={handleClick}>
			{renderIcon()}
			{title}
		</a>
	);
}

export default Button;
