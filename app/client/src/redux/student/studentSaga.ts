import { call, put } from 'redux-saga/effects';
import { TStudent } from '../../types/students';
import {
  getAllStudentsSuccesed,
  getAllStudentsFailed,
  getStudentByIdSuccesed,
  getStudentByIdFailed,
  updateStudentByIdFailed,
  updateStudentByIdSuccesed,
  deleteStudentByIdFailed,
  deleteStudentByIdSuccesed,
} from './studentSlice';

import {
  deleteStudentByIdService,
  getAllStudentsByCourseService,
  getStudentByIdService,
  updateStudentByIdService,
} from '../../services/studentService';

export interface IStudents {
  type: string;
  payload: string | TStudent;
}
function* getStudentsData(data: IStudents) {
  try {
    let id;
    if (typeof data.payload !== 'string') {
      id = data.payload.courseId.toString;
    } else {
      id = data.payload.toString;
    }
    // const students: TStudent[] = yield call(getAllStudentsByCourseService, id);
    // console.log(students, 'fetched students from saga');
    // yield put(getAllStudentsSuccesed(students));
  } catch (error) {
    yield put(getAllStudentsFailed());
  }
}
function* getStudentById(id: string) {
  try {
    const student: TStudent = yield call(getStudentByIdService, id);
    yield put(getStudentByIdSuccesed(student));
  } catch (error) {
    yield put(getStudentByIdFailed(error));
  }
}

function* updateStudentById(id: string) {
  try {
    const response: string = yield call(updateStudentByIdService, id);
    yield put(updateStudentByIdSuccesed(response));
  } catch (error) {
    yield put(updateStudentByIdFailed(error));
  }
}

function* deleteStudentById(id: string) {
  try {
    const response: string = yield call(deleteStudentByIdService, id);
    yield put(deleteStudentByIdSuccesed(response));
  } catch (error) {
    yield put(deleteStudentByIdFailed(error));
  }
}

export {
  getStudentsData,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
