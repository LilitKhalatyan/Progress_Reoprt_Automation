import { call, put, takeEvery } from 'redux-saga/effects';

import { TStudent } from '../types/students';
import {
  getAllStudentsAction,
  getAllStudentsSuccesed,
  getAllStudentsFailed,
} from './student/studentSlice';
import { getAllStudents } from '../services/studentService';

function* getStudentsData() {
  try {
    const students: TStudent[] = yield call(getAllStudents);
    console.log(students, 'fetched students from saga');
    yield put(getAllStudentsSuccesed(students));
  } catch (e) {
    console.log(e);
    yield put(getAllStudentsFailed())
  }
}

export default function* watchDataSaga() {
  yield takeEvery(getAllStudentsAction.type, getStudentsData);
}
