'use strict';

import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
	name: 'task',
	initialState: {
		value: {},
	},
	reducers: {
		setTask: (state, action) => {
			state.value = action.payload;
		},
	},
});

const { setTask } = taskSlice.actions;

export {
	taskSlice,
	setTask,
};

export default taskSlice.reducer;
