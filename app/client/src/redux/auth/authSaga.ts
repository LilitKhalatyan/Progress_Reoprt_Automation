import { call, put } from 'redux-saga/effects';
import { IUser, logout, signIn } from '../../services/authService';

import { AuthData } from '../../types/authTypes';
import { loginFailed, loginSuccesed, logoutSuccesed } from './authSlice';

export function* logoutUser() {
	yield localStorage.removeItem('user');
	yield call(logout);
	yield put(logoutSuccesed());
}

export function* auth(data: AuthData) {
	try {
		const response: Response = yield call(signIn, data.payload);

		if (!response.ok) {
			throw new Error('Login failed');
		}
		const user: IUser = yield response.json() as Promise<IUser>;

		yield localStorage.setItem('user', JSON.stringify(user));
		yield put(loginSuccesed(user));
	} catch (error: any) {
		// in typescript error can only be one of two types: "any" or "unknown"
		yield put(loginFailed(error.message));
	}
}
