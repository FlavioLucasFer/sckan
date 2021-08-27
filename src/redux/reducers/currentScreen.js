'use strict';

import { createSlice } from '@reduxjs/toolkit';

const currentScreenSlice = createSlice({
	name: 'currentScreen',
	initialState: {
		value: {},
	},
	reducers: {
		setCurrentScreen: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setCurrentScreen } = currentScreenSlice.actions;

export {
	currentScreenSlice,
	setCurrentScreen,
};

export default currentScreenSlice.reducer;
