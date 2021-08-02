import './css/Modal.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	actions: PropTypes.arrayOf(Object),
	options: PropTypes.object,
	children: PropTypes.element,
};

function Modal(props) {
	const {
		title,
		className,
		actions,
		options,
		children,
		...rest
	} = props;

	useEffect(() => {
		M.Modal.init(document.querySelectorAll('.modal'), options);
	}, []);

	function renderFooter() {
		if (!actions) {
			return;
		}
		
		return (
			<div className="modal-footer">
				{actions.map((e, i) => (
					<a {...e} 
						key={i} 
						className={`waves-effect ${e.className || ''} btn-flat footer-button`}>
							{e.title}
					</a>
				))}
			</div>
		);
	}

	return (
		<div {...rest}
			className={`modal ${className || ''} ${actions ? 'modal-fixed-footer' : ''}`}>
			<div className="modal-content">
				<h5>{title}</h5>
				{children}
			</div>
			{renderFooter()}
		</div>
	);
}

export default Modal;
