import { authState } from '../types/authTypes';

export interface Message {
	message: string;
}
export interface TrainerId {
	id: string;
}
export const createTrainerFetch = async (form: authState): Promise<Response> => {
	const response = await fetch(`http://localhost:3303/auth/signup`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...form,
		}),
	});
	return response;
};

export const getTrainer = async (id: string): Promise<Response> => {
	const response = await fetch(`http://localhost:3303/trainersby/${id}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response;
};

export const getAllTrainers = async (): Promise<Response> => {
	const response = await fetch(`http://localhost:3303/trainers/all<`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response;
};

export const deleteTrainerById = async (id: string): Promise<Response> => {
	const response = await fetch(`http://localhost:3303/trainers/delete/${id}`, {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response;
};

// to do
export const updateTrainerById = async (form: authState) => {};
