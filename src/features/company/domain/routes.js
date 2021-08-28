'use strict';

const { REACT_APP_API_URL } = process.env;

const BASE_URL = `${REACT_APP_API_URL}/companies`;

const ROUTES = {
	CREATE: `${BASE_URL}/create`,
	EDIT: `${BASE_URL}/edit`,
	FIND: `${BASE_URL}/find`,
	FIND_BY_ID: `${BASE_URL}/find/:id`,
	REMOVE: `${BASE_URL}/remove`,
};

export default ROUTES;
