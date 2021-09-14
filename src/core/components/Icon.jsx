import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Icon.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
	tooltipPosition: PropTypes.string,
	tooltip: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string,
};

function Icon(props) {
	const { 
		type,
		size, 
		color, 
		className,
		tooltipPosition,
		tooltip,
		onClick,
		children,
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

	return (
		<i {...rest}
			className={`
				${tooltip && 'tooltipped'}
				${className || ''} ${size || ''} 
				${type ? `material-icons-${type}` : 'material-icons-outlined'}
				${color || ''}
			`}
			data-position={tooltipPosition || 'bottom'} 
			data-tooltip={tooltip || ''}
			onClick={handleClick}>
			{children}
		</i>
	);
}

export default Icon;