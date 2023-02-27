import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { notify } from '../../utils';
import { IStudents, TStudent, IStudentsId, Message} from '../../types/studentTypes';
import {
	createStudentSuccesed,
	createStudentFailed,
	getAllStudentsSuccesed,
	getAllStudentsFailed,
	getStudentByIdSuccesed,
	getStudentByIdFailed,
	updateStudentByIdSuccesed,
	updateStudentByIdFailed,
	deleteStudentByIdSuccesed,
	deleteStudentByIdFailed,
	getAllStudentsAction,
} from './studentSlice';

import {
	createStudentService,
	getAllStudentsByCourseService,
	getAllStudentsService,
	getStudentByIdService,
	updateStudentByIdService,
	deleteStudentByIdService,
} from '../../services/studentService';


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

function* getStudentsDataByCourse(data: IStudentsId) {
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

function* getStudentById(data: IStudentsId) {
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

function* updateStudentById(data: IStudents) {
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

function* deleteStudentById(data: IStudentsId) {
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


export {
	createStudent,
	getStudentsData,
	getStudentById,
	getStudentsDataByCourse,
	updateStudentById,
	deleteStudentById
};
