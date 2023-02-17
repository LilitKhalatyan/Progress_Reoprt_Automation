export type TCourse = {
	id: number;
	name: string;
	startDate: string;
	endDate: string;
};

export interface CourseSliceState {
	courses: TCourse[];
	course: TCourse[];
	success: string;
	failed: string;
}
