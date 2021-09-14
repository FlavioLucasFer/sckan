import React, { useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const elemId = uniqueId('card-panel-');

CardPanel.propTypes = {
	id: PropTypes.string,
	backgroundColor: PropTypes.string,
	className: PropTypes.string,
	cardClassName: PropTypes.string,
	noCol: PropTypes.bool,
	tooltipPosition: PropTypes.string,
	tooltip: PropTypes.string,
	onClick: PropTypes.func,
	cardStyle: PropTypes.object,
	children: PropTypes.node,
};

function CardPanel(props, ref) {
	const {
		id,
		backgroundColor,
		className,
		cardClassName,
		noCol,
		tooltipPosition,
		tooltip,
		onClick,
		cardStyle,
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
		<div {...rest}
			ref={ref}
			className={`${!noCol && 'col'} ${className || ''}`}>
			<div id={id || elemId}
				className={`
					card-panel 
					${tooltip && 'tooltipped'}
					${cardClassName || ''} 
					${backgroundColor || ''}
				`}
				data-position={tooltipPosition || 'bottom'}
				data-tooltip={tooltip || ''}
				style={cardStyle}
				onClick={handleClick}>
				{children}
			</div>
		</div>
	);
}

export default forwardRef(CardPanel);