import { put, call } from 'redux-saga/effects';
import {
	createTrainerFetch,
	Message,
	getTrainer,
	getAllTrainers,
	deleteTrainerById,
} from '../../services/trainerService';
import { AuthData } from '../../types/authTypes';
import { Trainer, TrainerData } from '../../types/trainerTypes';
import {
	getAllTrainersFailed,
	// updateTrainerFailed,
	// updateTrainerSuccesed,
	createTrainerFailed,
	createTrainerSuccesed,
	getAllTrainersSuccesed,
	deleteTrainerSuccesed,
	deleteTrainerFailed,
	getTrainerSuccesed,
	getTrainerFailed,
	getAllTrainersAction,
} from './trainerSlice';

export function* getTrainerById(data: TrainerData) {
	try {
		console.log(data.payload);

		const trainer: Trainer = yield call(getTrainer, +data.payload);
		console.log(trainer);

		yield put(getTrainerSuccesed(trainer));
	} catch (error) {
		yield put(getTrainerFailed(error));
	}
}
export function* deleteTrainer(data: TrainerData) {
	try {
		const trainer: Message = yield call(deleteTrainerById, data.payload);
		yield put(deleteTrainerSuccesed(trainer));
	} catch (error) {
		yield put(deleteTrainerFailed(error));
	}
}

export function* updateTrainer(data: AuthData) {
	try {
	} catch (error) {}
}

export function* getTrainers() {
	try {
		const trainer: Trainer[] = yield call(getAllTrainers);
		yield put(getAllTrainersSuccesed(trainer));
	} catch (error) {
		yield put(getAllTrainersFailed(error));
	}
}

export function* createTrainer(data: AuthData) {
	try {
		const trainer: Message = yield call(createTrainerFetch, data.payload);
		// const trainers: Trainer[] = yield call(getAllTrainers);
		yield put(getAllTrainersAction());
		// yield put(getAllTrainersSuccesed(trainers));
		yield put(createTrainerSuccesed(trainer));
	} catch (error) {
		yield put(createTrainerFailed(error));
	}
}
