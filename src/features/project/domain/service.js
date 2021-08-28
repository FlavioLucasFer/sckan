'use strict';

import DELETE from 'core/http/delete';
import POST from 'core/http/post';
import GET from 'core/http/get';
import PUT from 'core/http/put';

import ROUTES from 'features/project/domain/routes';

async function create(project) {
	try {
		const res = await POST(ROUTES.CREATE, project);

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err
	}
}

async function edit(project) {
	try {
		const res = await PUT(ROUTES.EDIT, project);

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err;
	}
}

async function save(project) {
	try {
		let res;
		if (!project.id) {
			res = await create(project);
		} else {
			res = await edit(project);
		}

		if (res.error)
			throw res.error;

		return res;
	} catch (err) {
		throw err;
	}
}

async function remove(id) {
	try {
		const res = await DELETE(ROUTES.REMOVE, { id });

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err;
	}
}

async function find(where) {
	try {
		let res;

		if (!where)
			res = await GET(ROUTES.FIND);
		else
			res = await POST(ROUTES.FIND, where);
		
		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err;
	}
}

export default {
	save,
	remove,
	find,
};
