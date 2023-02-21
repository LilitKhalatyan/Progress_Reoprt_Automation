import { call, put } from 'redux-saga/effects';
import { TCourse } from '../../types/courses';
import {
	createCourseSuccesed,
	createCourseFailed,
	getAllCoursesSuccesed,
	getAllCoursesFailed,
	getCourseByIdSuccesed,
	getCourseByIdFailed,
	updateCourseByIdFailed,
	updateCourseByIdSuccesed,
	deleteCourseByIdFailed,
	deleteCourseByIdSuccesed,
	getAllCoursesAction,
} from './courseSlice';

import {
	createCourseService,
	getAllCoursesService,
	getCourseByIdService,
	updateCourseByIdService,
	deleteCourseByIdService,
} from '../../services/courseService';
import { Message } from '../../services/trainerService';

export interface ICourse {
	type: string;
	payload: TCourse;
}
export interface GetCourse {
	type: string;
	payload: string;
}

function* createCourse(data: ICourse) {
	try {
		const response: Response = yield call(createCourseService, data.payload);
		if (!response.ok) {
			throw new Error('Course create failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(createCourseSuccesed(message));
		yield put(getAllCoursesAction());
	} catch (error: any) {
		yield put(createCourseFailed(error.message));
	}
}

function* getCoursesData() {
	try {
		const response: Response = yield call(getAllCoursesService);
		if (!response.ok) {
			throw new Error('Courses get failed');
		}
		const courses: TCourse[] = yield response.json() as Promise<TCourse[]>;
		yield put(getAllCoursesSuccesed(courses));
	} catch (error: any) {
		yield put(getAllCoursesFailed(error.message));
	}
}

function* getCourseById(data: GetCourse ) {
	try {

		const response: Response = yield call(getCourseByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Course get failed');
		}
		const course: TCourse[] = yield response.json() as Promise<TCourse[]>;

		yield put(getCourseByIdSuccesed(course));
	} catch (error: any) {
		yield put(getCourseByIdFailed(error.message));
	}
}

function* updateCourseById(data: ICourse) {
	try {
		const response: Response = yield call(updateCourseByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Course updated failed');
		}
		yield put(getAllCoursesAction());
		yield put(updateCourseByIdSuccesed(response));
	} catch (error: any) {
		yield put(updateCourseByIdFailed(error.message));
	}
}

function* deleteCourseById(data: ICourse) {
	try {
		const response: Response = yield call(deleteCourseByIdService, data.payload);
		if (!response.ok) {
			throw new Error('Course delete failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(getAllCoursesAction());
		yield put(deleteCourseByIdSuccesed(message));
	} catch (error: any) {
		yield put(deleteCourseByIdFailed(error.message));
	}
}

export { createCourse, getCoursesData, getCourseById, updateCourseById, deleteCourseById };
