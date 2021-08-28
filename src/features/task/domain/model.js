'use strict';

function model(
	id,
	name,
	description,
	priority,
	plannedSize,
	size,
	timeSpent,
	status,
	userThatCreated,
	employee,
	sprint,
) {
	return {
		...((id) && { id }),
		...((name) && { name }),
		...((description) && { description }),
		...((priority) && { priority }),
		...((plannedSize) && { plannedSize }),
		...((size) && { size }),
		...((timeSpent) && { timeSpent }),
		...((status) && { status }),
		...((userThatCreated) && { userThatCreated }),
		...((employee) && { employee }),
		...((sprint) && { sprint }),
	};
}

export default model;
