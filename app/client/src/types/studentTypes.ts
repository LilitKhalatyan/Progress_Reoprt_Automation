export type TStudent = {
	id?: number;
	name: string;
	surname: string;
	email: string;
	courseId: number;
};

export interface StudentSliceState {
	students: TStudent[];
	student: TStudent[];
	message: {};
	loading: boolean;
}

export interface IStudents {
	type: string;
	payload: TStudent;
}

export interface IStudentId {
	type: string;
	payload: string;
}

export interface ICourseId {
	type: string;
	payload: string;
}

export interface Message {
	message: string;
}
