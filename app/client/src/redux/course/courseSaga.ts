import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { notify } from '../../utils';
import { TCourse, ICourse, ICourseId, Message} from '../../types/courseTypes';
import {
	createCourseSuccesed,
	createCourseFailed,
	getAllCoursesSuccesed,
	getAllCoursesFailed,
	getCourseByIdSuccesed,
	getCourseByIdFailed,
	updateCourseByIdSuccesed,
	updateCourseByIdFailed,
	deleteCourseByIdSuccesed,
	deleteCourseByIdFailed,
	getAllCoursesAction,
} from './courseSlice';

import {
	createCourseService,
	getAllCoursesService,
	getCourseByIdService,
	updateCourseByIdService,
	deleteCourseByIdService,
} from '../../services/courseService';


function* createCourse(data: ICourse) {
	try {
		const response: Response = yield call(createCourseService, data.payload);
		if (!response.ok) {
			throw new Error('Course create failed');
		}
		const message: Message = yield response.json() as Promise<Message>;
		yield put(createCourseSuccesed(message));
		notify(message.message);
		toast.success(message.message); // option 2, to review later
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
		const courses: ICourse[] = yield response.json() as Promise<ICourse[]>;
		yield put(getAllCoursesSuccesed(courses));
	} catch (error: any) {
		yield put(getAllCoursesFailed(error.message));
	}
}

function* getCourseById(data: ICourseId) {
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
		const message: Message = yield response.json() as Promise<Message>;
		yield put(updateCourseByIdSuccesed(message));
		notify(message.message);
		yield put(getAllCoursesAction());
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
		yield put(deleteCourseByIdSuccesed(message));
		notify(message.message);
		yield put(getAllCoursesAction());
	} catch (error: any) {
		yield put(deleteCourseByIdFailed(error.message));
	}
}

export {
	createCourse,
	getCoursesData,
	getCourseById,
	updateCourseById,
	deleteCourseById
};
