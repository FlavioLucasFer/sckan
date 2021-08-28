'use strict'

const { REACT_APP_API_URL } = process.env;

const BASE_URL = `${REACT_APP_API_URL}/tasks`;

const ROUTES = {
	CREATE: `${BASE_URL}/create`,
	EDIT: `${BASE_URL}/edit`,
	REMOVE: `${BASE_URL}/remove`,
	FIND: `${BASE_URL}/find`,
	FIND_BY_ID: `${BASE_URL}/find/:id`,
};

export default ROUTES;
