import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem } from "react-contextmenu";
import ConfirmActionModal from 'core/modals/ConfirmActionModal';

TaskContextMenu.propTypes = {
	task: PropTypes.object.isRequired,
	onMove: PropTypes.func,
};

function TaskContextMenu(props) {
	const { 
		task,
		onMove,
		...rest
	} = props;
	
	function handleMove(e, data) {
		console.log('task:', task);
		if (onMove)
			onMove(task, data.value);
	}

	return (
		<div>
			<ContextMenu {...rest}>
				<span className="react-contextmenu-label">Move to</span>

				<MenuItem data={{ value: "TD" }} 
					disabled={task.status === 'TD'}
					onClick={handleMove}>
					<div className="contextmenu-item">
						Todo
					</div>
				</MenuItem>
				<MenuItem data={{ value: "DG" }}
					disabled={task.status === 'DG'}
					onClick={handleMove}>
					<div className="contextmenu-item">
						Doing
					</div>
				</MenuItem>
				<MenuItem data={{ value: "RC" }}
					disabled={task.status === 'RC'}
					onClick={handleMove}>
					<div className="contextmenu-item">
						Reviewing code
					</div>
				</MenuItem>
				<MenuItem data={{ value: "TE" }}
					disabled={task.status === 'TE'}
					onClick={handleMove}>
					<div className="contextmenu-item">
						Testing
					</div>
				</MenuItem>
				<MenuItem data={{ value: "DN" }}
					disabled={task.status === 'DN'}
					onClick={handleMove}>
					<div className="contextmenu-item">
						Done
					</div>
				</MenuItem>
			</ContextMenu>
		</div>
	);
};

export default TaskContextMenu;
