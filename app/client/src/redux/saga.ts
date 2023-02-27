import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
	getAllStudentsAction,
	getStudentByIdAction,
	updateStudentByIdAction,
	deleteStudentByIdAction,
	createStudentAction,
} from './student/studentSlice';

import {
	getStudentsData,
	getStudentById,
	updateStudentById,
	deleteStudentById,
	createStudent,
} from './student/studentSaga';

import {
	createCourseAction,
	deleteCourseByIdAction,
	getAllCoursesAction,
	getCourseByIdAction,
	updateCourseByIdAction,
	// updateCourseByIdAction,
} from './course/courseSlice';

import {
	getAllTrainersAction,
	updateTrainerByIdAction,
	getTrainerByIdAction,
	createTrainerAction,
	deleteTrainerByIdAction,
} from './trainer/trainerSlice';

import { createTrainer, deleteTrainerById, getTrainerById, getAllTrainers } from './trainer/trainerSaga';

import {
	createCourse,
	getCourseById,
	getCoursesData,
	updateCourseById,
	deleteCourseById,
} from './course/courseSaga';

import {
	createSubjectAction,
	getAllSubjectAction,
	getSubjectByIdAction,
	updateSubjectByIdAction,
	deleteSubjectByIdAction,
} from './subject/subjectSlice';
import {
	createSubject,
	getSubjectsData,
	getSubjectById,
	updateSubjectById,
	deleteSubjectById,
} from './subject/subjectSaga';
import { loginAction, logoutAction, refreshAction } from './auth/authSlice';
import { auth, getAllData, logoutUser } from './auth/authSaga';

export default function* watchDataSaga() {
	yield takeEvery(loginAction.type, auth);
	yield takeEvery(refreshAction.type, getAllData);
	yield takeEvery(logoutAction.type, logoutUser);
	yield takeLatest(createCourseAction.type, createCourse);
	yield takeLatest(getAllCoursesAction.type, getCoursesData);
	yield takeEvery(getAllTrainersAction.type, getTrainerById);
	yield takeEvery(updateTrainerByIdAction.type, getAllTrainers);
	yield takeEvery(getAllTrainersAction.type, getAllTrainers);
	yield takeEvery(createTrainerAction.type, createTrainer);
	yield takeEvery(deleteTrainerByIdAction.type, deleteTrainerById);
	yield takeEvery(getCourseByIdAction.type, getCourseById);
	yield takeEvery(createStudentAction.type, createStudent);
	yield takeLatest(updateCourseByIdAction.type, updateCourseById);
	yield takeLatest(deleteCourseByIdAction.type, deleteCourseById);
	yield takeEvery(getAllStudentsAction.type, getStudentsData);
	yield takeEvery(getStudentByIdAction.type, getStudentById);
	yield takeEvery(updateStudentByIdAction.type, updateStudentById);
	yield takeEvery(deleteStudentByIdAction.type, deleteStudentById);
	yield takeEvery(createSubjectAction.type, createSubject);
	yield takeEvery(getAllSubjectAction.type, getSubjectsData);
	yield takeEvery(getSubjectByIdAction.type, getSubjectById);
	yield takeEvery(updateSubjectByIdAction.type, updateSubjectById);
	yield takeEvery(deleteSubjectByIdAction.type, deleteSubjectById);
}
