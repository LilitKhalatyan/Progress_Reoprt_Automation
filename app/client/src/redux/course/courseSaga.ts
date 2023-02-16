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
} from './courseSlice';

import {
  createCourseService,
  getAllCoursesService,
  getCourseByIdService,
  updateCourseByIdService,
  deleteCourseByIdService,
} from '../../services/courseService';

export interface ICourse {
  type: string;
  payload: TCourse;
}

function* createCourse(data: ICourse) {
  try {
    const course: TCourse[] = yield call(createCourseService, data.payload);
    yield put(getAllCoursesSuccesed(course));
  } catch (error) {
    yield put(getAllCoursesFailed());
  }
}

function* getCoursesData() {
  try {
    const courses: TCourse[] = yield call(getAllCoursesService);
    yield put(createCourseSuccesed(courses));
  } catch (error) {
    yield put(createCourseFailed());
  }
}

function* getCourseById(id: string) {
  try {
    const course: TCourse = yield call(getCourseByIdService, id);
    yield put(getCourseByIdSuccesed(course));
  } catch (error) {
    yield put(getCourseByIdFailed(error));
  }
}

function* updateCourseById(id: string) {
  try {
    const response: string = yield call(updateCourseByIdService, id);
    yield put(updateCourseByIdSuccesed(response));
  } catch (error) {
    yield put(updateCourseByIdFailed(error));
  }
}

function* deleteCourseById(id: string) {
  try {
    const response: string = yield call(deleteCourseByIdService, id);
    yield put(deleteCourseByIdSuccesed(response));
  } catch (error) {
    yield put(deleteCourseByIdFailed(error));
  }
}

export {
  createCourse,
  getCoursesData,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
