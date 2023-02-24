import { call, put } from 'redux-saga/effects';
import { TCourse, ICourse, CourseSliceState, GetCourse } from '../../types/courseTypes';
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
import { toast } from 'react-toastify';

import {
	createCourseService,
	getAllCoursesService,
	getCourseByIdService,
	updateCourseByIdService,
	deleteCourseByIdService,
} from '../../services/courseService';
import { notify } from '../../utils';

function* createCourse(data: ICourse) {
	try {
		const response: Response = yield call(createCourseService, data.payload);
		if (!response.ok) {
			throw new Error('Course create failed');
		}
		const { message }: CourseSliceState = yield response.json() as Promise<CourseSliceState>;
		yield put(createCourseSuccesed(message));
		notify(message as string);
		toast.success(message as string); // option 2, to review later
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

function* getCourseById(data: GetCourse) {
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
		const { message }: CourseSliceState = yield response.json() as Promise<CourseSliceState>;
		yield put(updateCourseByIdSuccesed(message));
		notify(message as string);
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
		const { message }: CourseSliceState = yield response.json() as Promise<CourseSliceState>;
		yield put(deleteCourseByIdSuccesed(message));
		notify(message as string);
		yield put(getAllCoursesAction());
	} catch (error: any) {
		yield put(deleteCourseByIdFailed(error.message));
	}
}

export { createCourse, getCoursesData, getCourseById, updateCourseById, deleteCourseById };
