'use strict';

import { configureStore } from '@reduxjs/toolkit';

import productOwnersReducer from 'redux/reducers/productOwners';
import currentScreenReducer from 'redux/reducers/currentScreen';
import scrumMastersReducer from 'redux/reducers/scrumMasters';
import developersReducer from 'redux/reducers/developers';
import companiesReducer from 'redux/reducers/companies';
import projectsReducer from 'redux/reducers/projects';
import sprintsReducer from 'redux/reducers/sprints';
import companyReducer from 'redux/reducers/company';
import usersReducer from 'redux/reducers/users';
import taskReducer from 'redux/reducers/task';
import userReducer from 'redux/reducers/user';

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');

		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (e) {
		return undefined;
	}
};

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (e) {
		// Ignore write errors;
	}
};

const preloadedState = loadState();

const store = configureStore({
	reducer: {
		user: userReducer,
		task: taskReducer,
		users: usersReducer,
		company: companyReducer,
		sprints: sprintsReducer,
		projects: projectsReducer,
		companies: companiesReducer,
		developers: developersReducer,
		scrumMasters: scrumMastersReducer,
		productOwners: productOwnersReducer,
		currentScreen: currentScreenReducer,
	},
	preloadedState,
});


store.subscribe(() => {
	saveState(store.getState());
});

export default store;
