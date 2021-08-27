'use strict';

import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
	name: 'projects',
	initialState: {
		value: [],
	},
	reducers: {
		setProjects: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setProjects } = projectsSlice.actions;

export {
	projectsSlice,
	setProjects,
};

export default projectsSlice.reducer;
