'use strict';

import store from 'redux/store';

async function GET(route) {
	const user = store.getState().user.value;

	const headers = {
		'x-access-token': user.token || null,
	}

	const requestOptions = {
		method: 'GET',
		headers,
		credentials: 'include',
	};

	try {
		const res = await fetch(route, requestOptions);
		return await res.json();
	} catch (err) {
		throw err;
	}
}

export default GET;
