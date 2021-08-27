'use strict';

import store from 'redux/store';

async function DELETE(route, body) {
	const user = store.getState().user.value;

	const headers = {
		'Content-Type': 'application/json',
		'x-access-token': user.token || null,
	}

	const requestOptions = {
		method: 'DELETE',
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

export default DELETE;
