'use strict';

import store from 'redux/store';

async function POST(route, body) {
	const user = store.getState().user.value;

	const headers = {
		'Content-Type': 'application/json',
		'x-access-token': user.token || '',
	}

	const requestOptions = {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
		credentials: 'include',
	};

	try {
		const res = await fetch(route, requestOptions);
		return await res.json();
	} catch (err) {
		throw err;
	}
}

export default POST;
