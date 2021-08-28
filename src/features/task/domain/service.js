'use strict';

import DELETE from 'core/http/delete';
import POST from 'core/http/post';
import PUT from 'core/http/put';
import GET from 'core/http/get';

import ROUTES from 'features/task/domain/routes';

async function create(task) {
	try {
		const res = await POST(ROUTES.CREATE, task);

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err
	}
}

async function edit(task) {
	try {
		const res = await PUT(ROUTES.EDIT, task);

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err;
	}
}

async function save(task) {
	try {
		let res;
		if (!task.id) {
			res = await create(task);
		} else {
			res = await edit(task);
		}

		if (res.error)
			throw res.error;

		return res;
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

async function findById(id) {
	try {
		const res = await GET(ROUTES.FIND_BY_ID.replace(':id', id));

		if (res.error) {
			throw res;
		}

		return res.data;
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

export default {
	save,
	find,
	findById,
	remove,
};
