export type TCourse = {
	id?: number;
	name: string;
	startDate: string;
	endDate: string;
};

export interface ICourse {
	type: string;
	payload: TCourse;
}

export interface CourseSliceState {
	courses: TCourse[];
	course: TCourse[];
	message: {};
}

export interface Message {
	message: string;
}

export interface GetCourse {
	type: string;
	payload: string;
}
