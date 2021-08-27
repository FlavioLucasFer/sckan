'use strict';

import { createSlice } from '@reduxjs/toolkit';

const productOwnersSlice = createSlice({
	name: 'productOwners',
	initialState: {
		value: [],
	},
	reducers: {
		setProductOwners: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setProductOwners } = productOwnersSlice.actions;

export {
	productOwnersSlice,
	setProductOwners,
};

export default productOwnersSlice.reducer;
