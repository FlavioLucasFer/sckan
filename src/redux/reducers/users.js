'use strict';

import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		value: {},
	},
	reducers: {
		setUsers: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setUsers } = usersSlice.actions;

export {
	usersSlice,
	setUsers,
};

export default usersSlice.reducer;
