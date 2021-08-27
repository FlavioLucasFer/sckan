'use strict';

import { createSlice } from '@reduxjs/toolkit';

const companiesSlice = createSlice({
	name: 'companies',
	initialState: {
		value: [],
	},
	reducers: {
		setCompanies: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setCompanies } = companiesSlice.actions;

export {
	companiesSlice,
	setCompanies,
};

export default companiesSlice.reducer;
