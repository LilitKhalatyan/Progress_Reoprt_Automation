import { call, put, takeEvery } from "redux-saga/effects";

import { Student } from "../types/students";
import { getAllStudentsAction, getAllStudentsSuccesed } from "./studentSlice";
import { getAllStudents } from "../services/studentService"


function* getStudentsData() {
  try{
    const students: Student[] = yield call(getAllStudents);
    console.log(students, "fetched students from saga")
    yield put(getAllStudentsSuccesed(students));
  } catch(e) {
    console.log(e)
    // yield put(getAllStudentsFailed())
  }
}

export default function* watchDataSaga() {
  yield takeEvery(getAllStudentsAction.type, getStudentsData);

}