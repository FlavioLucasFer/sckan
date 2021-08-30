import './css/PriorityBox.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

PriorityBox.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
};

function PriorityBox(props) {
	const {
		name,
		color,
		selected,
		...rest
	} = props;

	useEffect(() => {
		M.Tooltip.init(document.querySelectorAll('.tooltipped'));
	}, []);

	return (
		<div {...rest}
			className={`priority-button ${color} tooltipped flex h-center v-center`}
			style={{
				height: selected ? '35px' : '30px',
				marginRight: '3px',
			}}
			data-position="bottom"
			data-tooltip={name} >
			{selected ?
				name
				:
				null
			}
		</div>
	);
}

export default PriorityBox;
