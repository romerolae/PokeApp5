import { createSlice } from '@reduxjs/toolkit';

export const nameTrainerSlice = createSlice({
	name: 'nameTrainer',
	initialState: '',
	reducers: {
		setNameTrainer: (state, action) => action.payload,
	},
});

export const { setNameTrainer } = nameTrainerSlice.actions;

export default nameTrainerSlice.reducer;

// Que es lo que son reducer: son las acciones

//
