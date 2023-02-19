import { call, put } from 'redux-saga/effects';

import { Message } from '../../services/trainerService';
import { createSubjectFailed, createSubjectSuccesed, deleteSubjectByIdFailed, deleteSubjectByIdSuccesed, getAllSubjectAction, getAllSubjectFailed, getAllSubjectSuccesed, getSubjectByIdFailed, getSubjectByIdSuccesed, updateSubjectByIdFailed, updateSubjectByIdSuccesed } from './subjectSlice';
import { TSubject } from '../../types/subjectTypes';
import { createSubjectService, deleteSubjectByIdService, getAllSubjectService, getSubjectByIdService, updateSubjectByIdService } from '../../services/subjectService';

export interface ISubject {
	type: string;
	payload: TSubject;
}
export interface SubjectId {
	type: string;
	payload: string;
}

function* createSubject(data: ISubject) {
	try {
		const response: Response = yield call(createSubjectService, data.payload);
		if (!response.ok) {
			throw new Error('Course create failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(createSubjectSuccesed(message));
		yield put(getAllSubjectAction());
	} catch (error: any) {
		yield put(createSubjectFailed(error.message));
	}
}

function* getSubjectsData() {
	try {
		const response: Response = yield call(getAllSubjectService);
		if (!response.ok) {
			throw new Error('Courses get failed');
		}
		const subjects: TSubject[] = yield response.json() as Promise<TSubject[]>;
		yield put(getAllSubjectSuccesed(subjects));
	} catch (error: any) {
		yield put(getAllSubjectFailed(error.message));
	}
}

function* getSubjectById(data: SubjectId) {
	try {
		const response: Response = yield call(getSubjectByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Course get failed');
		}
		const subject: TSubject[] = yield response.json() as Promise<TSubject[]>;
		yield put(getSubjectByIdSuccesed(subject));
	} catch (error: any) {
		yield put(getSubjectByIdFailed(error.message));
	}
}


function* updateSubjectById(data: SubjectId) {
	try {
		const response: Response = yield call(updateSubjectByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Course updated failed');
		}
        const message: Message = yield response.json() as Promise<Message>;
		yield put(getAllSubjectAction());
		yield put(updateSubjectByIdSuccesed(message));
	} catch (error: any) {
		yield put(updateSubjectByIdFailed(error.message));
	}
}

function* deleteSubjectById(data: SubjectId) {
	try {
		const response: Response = yield call(deleteSubjectByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Course delete failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(getAllSubjectAction());
		yield put(deleteSubjectByIdSuccesed(message));
	} catch (error: any) {
		yield put(deleteSubjectByIdFailed(error.message));
	}
}

export { createSubject, getSubjectsData, updateSubjectById, deleteSubjectById, getSubjectById };
