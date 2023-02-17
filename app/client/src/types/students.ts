export type TStudent = {
	id: number;
	name: string;
	surname: string;
	email: string;
	courseId: number;
};

export interface StudentSliceState {
	students: TStudent[];
	student: TStudent[];
	success: string;
	failed: string;
}
