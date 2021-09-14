'use strict';

import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
	name: 'company',
	initialState: {
		value: [],
	},
	reducers: {
		setCompany: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setCompany } = companySlice.actions;

export {
	companySlice,
	setCompany,
};

export default companySlice.reducer;
