import { authState } from '../types/authTypes';

export interface IUser {
	name: string;
	id: number;
	email: string;
	roles: string;
}

const signIn = async (form: authState): Promise<IUser> => {
	const response = await fetch(`http://localhost:3303/auth/signin`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...form,
		}),
	});
	const user = await response.json();
	return user as IUser;
};

const logout = async () => {
	await fetch(`http://localhost:3303/auth/logout`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
export { signIn, logout };
