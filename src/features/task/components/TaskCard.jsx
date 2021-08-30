import 'features/task/components/css/TaskCard.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import CardPanel from 'core/components/CardPanel';
import Icon from 'core/components/Icon';

TaskCard.propTypes = {
	task: PropTypes.object,
};

function TaskCard(props) {
	const { task } = props;

	useEffect(() => {
		M.Tooltip.init(document.querySelectorAll('.tooltipped'));
	}, []);

	function priorityColor() {
		switch (task.priority) {
			case 'NP':
				return '90a4ae';

			case 'LW':
				return '00e5ff';

			case 'MD':
				return '03a9f4';
			
			case 'HG':
				return 'ff9800';
			
			case 'UG':
				return 'f44336';
		}
	}

	return (
		<CardPanel cardClassName="task-card"
			noCol
			cardStyle={{ borderRight: `5px solid #${priorityColor()}` }}>
			<h6 className="ellipsis-text grey-text text-darken-4">{task.name}</h6>
			
			<div className="task-card-footer">
				<div className="tooltipped"
					data-position="top"
					data-tooltip="Planed size / size">
					<Icon id="planed-size-icon"
						color="grey-text text-darken-2">
						content_paste
					</Icon>

					<label htmlFor="planed-size-icon"
						className="grey-text text-darken-2">{task.plannedSize || '0'} / {task.size || '0'}</label>
				</div>

				<div className="tooltipped"
					data-position="top"
					data-tooltip="Time spent">
					<Icon id="time-spent-icon"
						color="grey-text text-darken-2">
						timer
					</Icon>

					<label htmlFor="time-spent-icon"
						className="grey-text text-darken-2">{task.timeSpent > 0 ? task.timeSpent : '00h00m00s'}</label>
				</div>
			</div>
		</CardPanel>
	);
}

export default TaskCard;