'use strict';

import { createSlice } from '@reduxjs/toolkit';

const sprintsSlice = createSlice({
	name: 'companies',
	initialState: {
		value: [],
	},
	reducers: {
		setSprints: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setSprints } = sprintsSlice.actions;

export {
	sprintsSlice,
	setSprints,
};

export default sprintsSlice.reducer;
