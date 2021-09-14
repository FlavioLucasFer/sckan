import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	cardClassName: PropTypes.string,
	cardTitleClassName: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	actions: PropTypes.arrayOf(Object),
	children: PropTypes.node,
};

function Card(props, ref) {
	const { 
		title, 
		className,
		cardClassName,
		cardTitleClassName,
		backgroundColor, 
		textColor,
		actions,
		children,
		...rest 
	} = props;

	function renderActions() {
		if (!actions) {
			return null;
		}

		return (
			<div className="card-action">
				{actions.map((e, i) => (
					<a key={i} href={e.href}>{e.title}</a>
				))}
			</div>
		);
	}

	return (
		<div ref={ref} {...rest} className={`col ${className || ''}`}>
			<div className={`card ${cardClassName || ''} ${backgroundColor || ''}`}>
				<div className={`card-content  ${textColor || ''}`}>
					<span className={`card-title ${cardTitleClassName || ''}`}>{title}</span>
					<div className="row" 
						style={{
							marginBottom: 0,
						}}>
						{children}
					</div>
				</div>
				{renderActions()}
			</div>
		</div>
	);
}

Card.displayName = 'Card';

export default forwardRef(Card);