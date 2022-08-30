import { configureStore } from '@reduxjs/toolkit';
import nameTrainer from './slices/nameTrainer.slice';

export default configureStore({
	reducer: {
		nameTrainer,
	},
});

//En reducer se guarda todo lo referente a los estados

//Un estado global es un Slice
