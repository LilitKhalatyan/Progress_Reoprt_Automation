import { call, put } from 'redux-saga/effects';
import { TStudent } from '../../types/students';
import {
	getAllStudentsSuccesed,
	getAllStudentsFailed,
	getStudentByIdSuccesed,
	getStudentByIdFailed,
	updateStudentByIdFailed,
	updateStudentByIdSuccesed,
	deleteStudentByIdFailed,
	deleteStudentByIdSuccesed,
	createStudentSuccesed,
	createStudentFailed,
	getAllStudentsAction,
} from './studentSlice';

import {
	createStudentService,
	deleteStudentByIdService,
	getAllStudentsByCourseService,
	getAllStudentsService,
	getStudentByIdService,
	updateStudentByIdService,
} from '../../services/studentService';
import { Message } from '../../services/trainerService';

export interface IStudents {
	type: string;
	payload: TStudent;
}
export interface StudentsId {
	type: string;
	payload: string;
}

function* getStudentsData() {
	try {
		const response: Response = yield call(getAllStudentsService);
		if (!response.ok) {
			throw new Error('get all students failed');
		}
		const students: TStudent[] = yield response.json() as Promise<TStudent[]>;
		yield put(getAllStudentsSuccesed(students));
	} catch (error: any) {
		yield put(getAllStudentsFailed(error.message));
	}
}

function* getStudentsDataByCourse(data: StudentsId) {
	try {
		const response: Response = yield call(getAllStudentsByCourseService, data.payload);
		if (!response.ok) {
			throw new Error('get all students by course failed');
		}
		const students: TStudent[] = yield response.json() as Promise<TStudent[]>;
		yield put(getAllStudentsSuccesed(students));
	} catch (error: any) {
		yield put(getAllStudentsFailed(error.message));
	}
}

function* getStudentById(data: StudentsId) {
	try {
		const response: Response = yield call(getStudentByIdService, data.payload);
		if (!response.ok) {
			throw new Error('student get failed');
		}
		const student: TStudent[] = yield response.json() as Promise<TStudent[]>;
		yield put(getStudentByIdSuccesed(student));
	} catch (error: any) {
		yield put(getStudentByIdFailed(error.message));
	}
}

function* updateStudentById(data: StudentsId) {
	try {
		const response: Response = yield call(updateStudentByIdService, data.payload);
		if (!response.ok) {
			throw new Error('student update failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(getAllStudentsAction());
		yield put(updateStudentByIdSuccesed(message));
	} catch (error: any) {
		yield put(updateStudentByIdFailed(error.message));
	}
}

function* deleteStudentById(data: StudentsId) {
	try {
		const response: Response = yield call(deleteStudentByIdService, data.payload);
		if (!response.ok) {
			throw new Error('student delete failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(getAllStudentsAction());
		yield put(deleteStudentByIdSuccesed(message));
	} catch (error: any) {
		yield put(deleteStudentByIdFailed(error.message));
	}
}

function* createStudent(data: IStudents) {
	try {
		const response: Response = yield call(createStudentService, data.payload);
		if (!response.ok) {
			throw new Error('Create new student failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(getAllStudentsAction());
		yield put(createStudentSuccesed(message));
	} catch (error: any) {
		yield put(createStudentFailed(error.message));
	}
}

export {
	getStudentsData,
	getStudentById,
	updateStudentById,
	deleteStudentById,
	createStudent,
	getStudentsDataByCourse,
};
