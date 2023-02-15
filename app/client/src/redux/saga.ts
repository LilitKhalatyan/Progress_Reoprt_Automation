import { call, put, takeEvery } from "redux-saga/effects";

import { TStudent } from "../types/students";
import {
    getAllStudentsAction,
    getAllStudentsSuccesed,
    getAllStudentsFailed,
} from "./student/studentSlice";
import { getAllStudents } from "../services/studentService";
import { AuthData } from "../types/authTypes";
import { signIn, IUser, logout } from "../services/authService";
import {
    loginAction,
    loginFailed,
    loginSuccesed,
    logoutAction,
    logoutSuccesed,
} from "./auth/authSlice";

function* getStudentsData() {
    try {
        const students: TStudent[] = yield call(getAllStudents);
        yield put(getAllStudentsSuccesed(students));
    } catch (e) {
        console.log(e);
        yield put(getAllStudentsFailed());
    }
}

function* logoutUser() {
    yield localStorage.removeItem("user");
    yield call(logout);
    yield put(logoutSuccesed());
}

function* auth(data: AuthData) {
    try {
        const user: IUser = yield call(signIn, data.payload);
        yield localStorage.setItem("user", JSON.stringify(user));
        yield put(loginSuccesed(user));
    } catch (error) {
        yield put(loginFailed());
    }
}

export default function* watchDataSaga() {
    yield takeEvery(loginAction.type, auth);
    yield takeEvery(logoutAction.type, logoutUser);
    yield takeEvery(getAllStudentsAction.type, getStudentsData);
}
