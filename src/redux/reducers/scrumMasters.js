'use strict';

import { createSlice } from '@reduxjs/toolkit';

const scrumMastersSlice = createSlice({
	name: 'scrumMasters',
	initialState: {
		value: [],
	},
	reducers: {
		setScrumMasters: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setScrumMasters } = scrumMastersSlice.actions;

export {
	scrumMastersSlice,
	setScrumMasters,
};

export default scrumMastersSlice.reducer;
