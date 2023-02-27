export type TSubject = {
	id?: number;
	name: string;
	courseId: number;
	staffId: number;
};

export interface ISubject {
	type: string;
	payload: TSubject;
}

export interface ISubjectId {
	type: string;
	payload: string;
}

export interface Message {
	message: string;
}
