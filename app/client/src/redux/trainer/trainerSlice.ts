import { createSlice } from '@reduxjs/toolkit';
import { Trainer, TrainerByID } from '../../types/trainerTypes';

const initialState = {
	trainers: [] as Trainer[],
	trainer: [] as TrainerByID[],
	message: {},
	loading: true,
};

const trainerSlice = createSlice({
	name: 'trainers',
	initialState: initialState,
	reducers: {
		getAllTrainersAction: (state) => {
			state.loading = true;
		},
		getAllTrainersSuccesed: (state, action) => {
			state.trainers = action.payload;
			state.loading = false;
		},
		getAllTrainersFailed: (state, action) => {
			state.trainers = initialState.trainers;
			state.message = action.payload;
		},
		getTrainerAction: (state, action) => {},
		getTrainerSuccesed: (state, action) => {
			state.trainer = action.payload;
		},
		getTrainerFailed: (state, action) => {
			state.message = action.payload;
		},
		updateTrainerAction: (state, action) => {},
		updateTrainerSuccesed: (state, action) => {
			state.message = action.payload;
		},
		updateTrainerFailed: (state, action) => {
			state.message = action.payload;
		},
		createTrainerAction: (state, action) => {},
		createTrainerSuccesed: (state, action) => {
			state.message = action.payload;
		},
		createTrainerFailed: (state, action) => {
			state.message = action.payload;
		},
		deleteTrainerAction: (state, action) => {},
		deleteTrainerSuccesed: (state, action) => {
			state.message = action.payload;
		},
		deleteTrainerFailed: (state, action) => {
			state.message = action.payload;
		},
		trainerReset: () => {
			return initialState;
		},
	},
});

export const {
	getTrainerAction,
	getTrainerFailed,
	getTrainerSuccesed,
	getAllTrainersAction,
	updateTrainerAction,
	updateTrainerFailed,
	updateTrainerSuccesed,
	getAllTrainersSuccesed,
	getAllTrainersFailed,
	createTrainerAction,
	createTrainerFailed,
	createTrainerSuccesed,
	deleteTrainerAction,
	deleteTrainerFailed,
	deleteTrainerSuccesed,
	trainerReset,
} = trainerSlice.actions;

export default trainerSlice;
