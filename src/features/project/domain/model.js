'use strict';

function model(
		id, 
		name, 
		description, 
		contractor_name, 
		cloneLink, 
		userThatCreated, 
		scrumMaster,
		productOwner,
		company,
	) {
	return {
		...((id) && { id }),
		...((name) && { name }),
		...((description) && { description }),
		...((contractor_name) && { contractor_name }),
		...((cloneLink) && { cloneLink }),
		...((userThatCreated) && { userThatCreated }),
		...((scrumMaster) && { scrumMaster }),
		...((productOwner) && { productOwner }),
		...((company) && { company }),
	};
}

export default model;
