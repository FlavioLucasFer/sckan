'use strict';

function model(id, customIdentifier, description, sprintDuration, project) {
	return {
		...((id) && { id }),
		...((customIdentifier) && { customIdentifier }),
		...((description) && { description }),
		...((sprintDuration) && { sprintDuration }),
		...((project) && { project }),
	};
}

export default model;
