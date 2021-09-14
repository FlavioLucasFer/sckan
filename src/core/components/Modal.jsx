import './css/Modal.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	contentClassName: PropTypes.string,
	actions: PropTypes.arrayOf(Object),
	children: PropTypes.element,
};

function Modal(props) {
	const {
		title,
		className,
		contentClassName,
		actions,
		children,
		...rest
	} = props;

	useEffect(() => {
		M.Modal.init(document.querySelectorAll('.modal'), {
			dismissible: false,
		});
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
			<div className={`modal-content ${contentClassName || ''}`}>
				{title ? 
					<h5>{title}</h5>
				:
					null
				}
				{children}
			</div>
			{renderFooter()}
		</div>
	);
}

export default Modal;
