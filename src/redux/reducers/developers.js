'use strict';

import { createSlice } from '@reduxjs/toolkit';

const developersSlice = createSlice({
	name: 'developers',
	initialState: {
		value: [],
	},
	reducers: {
		setDevelopers: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setDevelopers } = developersSlice.actions;

export {
	developersSlice,
	setDevelopers,
};

export default developersSlice.reducer;
