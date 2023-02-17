import { createSlice } from '@reduxjs/toolkit';
import { Trainer } from '../../types/trainerTypes';

const initialState = {
	trainers: [] as Trainer[],
	trainer: [] as Trainer[],
	message: {},
};

const trainerSlice = createSlice({
	name: 'trainers',
	initialState: initialState,
	reducers: {
		getAllTrainersAction: (state) => {},
		getAllTrainersSuccesed: (state, action) => {
			state.trainers = action.payload;
		},
		getAllTrainersFailed: (state, action) => {
			state.trainers = initialState.trainers;
			state.message = action.payload;
		},
		getTrainerAction: () => {},
		getTrainerSuccesed: (state, action) => {
			console.log(action.payload);

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
} = trainerSlice.actions;

export default trainerSlice;
