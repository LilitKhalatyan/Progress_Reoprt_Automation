import { authState } from '../types/authTypes';
import { Trainer } from '../types/trainerTypes';

export interface Message {
	message: string;
}
export interface TrainerId {
	id: string;
}
export const createTrainerFetch = async (form: authState): Promise<Message> => {
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
	const message = await response.json();
	return message as Message;
};

export const getTrainer = async (id: number): Promise<Trainer> => {
	const response = await fetch(`http://localhost:3303/trainersby/${id}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const trainer = await response.json();
	return trainer as Trainer;
};

export const getAllTrainers = async (): Promise<Trainer[]> => {
	const response = await fetch(`http://localhost:3303/trainers/all`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const trainers = await response.json();
	return trainers as Trainer[];
};

export const deleteTrainerById = async (id: string): Promise<Message> => {
	const response = await fetch(`http://localhost:3303/trainers/delete/${id}`, {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const message = await response.json();
	return message as Message;
};

export const updateTrainerById = async (form: authState) => {};
