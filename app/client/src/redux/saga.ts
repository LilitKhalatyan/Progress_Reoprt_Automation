import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getAllStudentsAction,
  getStudentByIdAction,
  updateStudentByIdAction,
  deleteStudentByIdAction,
} from './student/studentSlice';
import {
  getStudentsData,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} from './student/studentSaga';

import {
  createCourseAction,
  deleteCourseByIdAction,
  getAllCoursesAction,
  getCourseByIdAction,
  updateCourseByIdAction,
} from './course/courseSlice';

import {
  createCourse,
  deleteCourseById,
  getCourseById,
  getCoursesData,
  updateCourseById,
} from './course/courseSaga';

import { AuthData } from '../types/authTypes';
import { signIn, IUser, logout } from '../services/authService';
import {
  loginAction,
  loginFailed,
  loginSuccesed,
  logoutAction,
  logoutSuccesed,
} from './auth/authSlice';

function* logoutUser() {
  yield localStorage.removeItem('user');
  yield call(logout);
  yield put(logoutSuccesed());
}

function* auth(data: AuthData) {
  try {
    const user: IUser = yield call(signIn, data.payload);
    yield localStorage.setItem('user', JSON.stringify(user));
    yield put(loginSuccesed(user));
  } catch (error) {
    yield put(loginFailed());
  }
}

export default function* watchDataSaga() {
  yield takeEvery(loginAction.type, auth);
  yield takeEvery(logoutAction.type, logoutUser);
  yield takeLatest(createCourseAction.type, createCourse);
  yield takeLatest(getAllCoursesAction.type, getCoursesData);
  // yield takeLatest(getCourseByIdAction.type, getCourseById);
  // yield takeLatest(updateCourseByIdAction.type, updateCourseById);
  // yield takeLatest(deleteCourseByIdAction.type, deleteCourseById);
  // yield takeEvery(getAllStudentsAction.type, getStudentsData);
  // yield takeEvery(getStudentByIdAction.type, getStudentById);
  // yield takeEvery(updateStudentByIdAction.type, updateStudentById);
  // yield takeEvery(deleteStudentByIdAction.type, deleteStudentById);
}
