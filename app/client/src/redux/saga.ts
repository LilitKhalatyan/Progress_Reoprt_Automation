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
	// updateCourseByIdAction,
} from './course/courseSlice';

import {
	getAllTrainersAction,
	updateTrainerAction,
	getTrainerAction,
	createTrainerAction,
	deleteTrainerAction,
} from './trainer/trainerSlice';

import { createTrainer, deleteTrainer, getTrainerById, getTrainers } from './trainer/trainerSaga';

import {
	createCourse,
	deleteCourseById,
	getCourseById,
	getCoursesData,
	// updateCourseById,
} from './course/courseSaga';

import { createSubjectAction, deleteSubjectByIdAction, getAllSubjectAction, getSubjectByIdAction, updateSubjectByIdAction } from './subject/subjectSlice';
import { createSubject, deleteSubjectById, getSubjectById, getSubjectsData, updateSubjectById } from './subject/subjectSaga';
import { loginAction, logoutAction } from './auth/authSlice';
import { auth, logoutUser } from './auth/authSaga';

export default function* watchDataSaga() {
	yield takeEvery(loginAction.type, auth);
	yield takeEvery(logoutAction.type, logoutUser);
	yield takeLatest(createCourseAction.type, createCourse);
	yield takeLatest(getAllCoursesAction.type, getCoursesData);
	yield takeEvery(getTrainerAction.type, getTrainerById);
	yield takeEvery(updateTrainerAction.type, getTrainers);
	yield takeEvery(getAllTrainersAction.type, getTrainers);
	yield takeEvery(createTrainerAction.type, createTrainer);
	yield takeEvery(deleteTrainerAction.type, deleteTrainer);
	yield takeEvery(getCourseByIdAction.type, getCourseById);
	yield takeEvery(createStudentAction.type, createStudent);
	//yield takeLatest(getCourseByIdAction.type, getCourseById);
	//yield takeLatest(updateCourseByIdAction.type, updateCourseById);
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
