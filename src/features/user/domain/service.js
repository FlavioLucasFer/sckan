'use strict';

import DELETE from 'core/http/delete';
import POST from 'core/http/post';
import PUT from 'core/http/put';
import GET from 'core/http/get';

import ROUTES from 'features/user/domain/routes';

async function create(user) {
	try {
		const res = await POST(ROUTES.CREATE, user);

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err
	}
}

async function edit(user) {
	try {
		const res = await PUT(ROUTES.EDIT, user);

		if (res.error) {
			throw res;
		}

		return res.data;
	} catch (err) {
		throw err;
	}
}

async function save(user) {
	try {
		let res;
		if (!user.id) {
			res = await create(user);
		} else {
			res = await edit(user);
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

async function signIn(login, password) {
	try {
		const res = await POST(ROUTES.SIGN_IN, { login, password });

		if (res.error) {
			throw res;
		}

		return res;
	} catch (err) {
		throw err;
	}
}

async function logout() {
	try {
		const res = await GET(ROUTES.LOGOUT);

		return res;
	} catch (err) {
		throw err;
	}
}

export default {
	save,
	remove,
	find,
	signIn,
	logout,
	findById,
};
