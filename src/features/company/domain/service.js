'use strict';

import DELETE from 'core/http/delete';
import POST from 'core/http/post';
import PUT from 'core/http/put';
import GET from 'core/http/get';

import ROUTES from 'features/company/domain/routes';

async function create(company) {
	try {
		const res = await POST(ROUTES.CREATE, company);
		
		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err
	}
}

async function edit(company) {
	try {
		const res = await PUT(ROUTES.EDIT, company);

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err;
	}
}

async function save(company) {
	try {
		let res;
		if (!company.id) {
			res = await create(company);
		} else {
			res = await edit(company);
		}

		if (res.error)
			throw res.error;

		return res;
	} catch (err) {
		throw err;
	}
}

async function find() {
	try {
		const res = await GET(ROUTES.FIND);

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
