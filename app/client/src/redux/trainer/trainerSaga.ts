import { put, call } from 'redux-saga/effects';
import { notify } from '../../utils';
import { ITrainer, TrainerByID, TrainerData, Message } from '../../types/trainerTypes';
import {
	createTrainerService,
	getAllTrainersService,
	getTrainerByIdService,
	updateTrainerByIdService,
	deleteTrainerByIdService,
} from '../../services/trainerService';
import { AuthData } from '../../types/authTypes';
import {
	createTrainerSuccesed,
	createTrainerFailed,
	getAllTrainersSuccesed,
	getAllTrainersFailed,
	getTrainerByIdSuccesed,
	getTrainerByIdFailed,
	updateTrainerByIdSuccesed,
	updateTrainerByIdFailed,
	deleteTrainerByIdSuccesed,
	deleteTrainerByIdFailed,
	getAllTrainersAction,
} from './trainerSlice';

export function* createTrainer(data: AuthData) {
	try {
		const response: Response = yield call(createTrainerService, data.payload);
		if (!response.ok) {
			throw new Error('Trainer create failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(createTrainerSuccesed(message));
		notify(message.message);
		yield put(getAllTrainersAction());
	} catch (error: any) {
		yield put(createTrainerFailed(error.message));
	}
}

export function* getAllTrainers() {
	try {
		const response: Response = yield call(getAllTrainersService);
		if (!response.ok) {
			throw new Error('Trainers get failed');
		}
		const trainers: ITrainer[] = yield response.json() as Promise<ITrainer[]>;
		yield put(getAllTrainersSuccesed(trainers));
	} catch (error: any) {
		yield put(getAllTrainersFailed(error.message));
	}
}

export function* getTrainerById(data: TrainerData) {
	try {
		const response: Response = yield call(getTrainerByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Trainer get failed');
		}
		const trainer: TrainerByID[] = yield response.json() as Promise<TrainerByID[]>;
		yield put(getAllTrainersSuccesed(trainer));
	} catch (error: any) {
		yield put(getAllTrainersFailed(error.message));
	}
}

export function* deleteTrainerById(data: TrainerData) {
	try {
		const response: Response = yield call(deleteTrainerByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Trainers delete failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(deleteTrainerByIdSuccesed(message));
		notify(message.message);
		yield put(getAllTrainersAction());
	} catch (error: any) {
		yield put(deleteTrainerByIdFailed(error.message));
	}
}

// to do
// export function* updateTrainer(data: AuthData) {
// 	try {
// 	} catch (error) {}
// }
