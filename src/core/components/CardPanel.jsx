import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const elemId = uniqueId('card-panel-');

CardPanel.propTypes = {
	backgroundColor: PropTypes.string,
	className: PropTypes.string,
	cardClassName: PropTypes.string,
	tooltipPosition: PropTypes.string,
	tooltip: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
};

function CardPanel(props) {
	const {
		backgroundColor,
		className,
		cardClassName,
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
		<div {...rest} 
			className={`col ${className || ''}`}>
			<div id={elemId}
				className={`
					card-panel 
					${tooltip && 'tooltipped'}
					${cardClassName || ''} 
					${backgroundColor || ''}
				`}
				data-position={tooltipPosition || 'bottom'}
				data-tooltip={tooltip || ''}
				onClick={handleClick}>
				{children}
			</div>
		</div>
	);
}

export default CardPanel;