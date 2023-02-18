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
		const response: Response = yield call(getTrainer, data.payload);
		if (!response.ok) {
			throw new Error('Trainer get failed');
		}
		const trainer: Trainer[] = yield response.json() as Promise<Trainer[]>;
		yield put(getTrainerSuccesed(trainer));
	} catch (error: any) {
		yield put(getTrainerFailed(error.message));
	}
}
export function* deleteTrainer(data: TrainerData) {
	try {
		const response: Response = yield call(deleteTrainerById, data.payload);
		if (!response.ok) {
			throw new Error('Trainers delete failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(getAllTrainersAction());
		yield put(deleteTrainerSuccesed(message));
	} catch (error: any) {
		yield put(deleteTrainerFailed(error.message));
	}
}

export function* updateTrainer(data: AuthData) {
	try {
	} catch (error) {}
}

export function* getTrainers() {
	try {
		const response: Response = yield call(getAllTrainers);
		if (!response.ok) {
			throw new Error('Trainers get failed');
		}
		const trainer: Trainer[] = yield response.json() as Promise<Trainer[]>;
		yield put(getAllTrainersSuccesed(trainer));
	} catch (error: any) {
		yield put(getAllTrainersFailed(error.message));
	}
}

export function* createTrainer(data: AuthData) {
	try {
		const response: Response = yield call(createTrainerFetch, data.payload);
		if (!response.ok) {
			throw new Error('Trainer create failed');
		}
		const trainer: Message = yield response.json() as Promise<Message>;

		yield put(getAllTrainersAction());
		yield put(createTrainerSuccesed(trainer));
	} catch (error: any) {
		yield put(createTrainerFailed(error.message));
	}
}
