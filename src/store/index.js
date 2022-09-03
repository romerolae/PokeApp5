import { configureStore } from '@reduxjs/toolkit';
import nameTrainer from './slices/nameTrainer.slice';
import setNumItem from './slices/pagination.slice';

export default configureStore({
	reducer: {
		nameTrainer,
		setNumItem,
	},
});

//En reducer se guarda todo lo referente a los estados

//Un estado global es un Slice
