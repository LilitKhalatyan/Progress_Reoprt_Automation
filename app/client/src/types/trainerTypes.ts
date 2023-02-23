export interface Trainer {
	id?: number;
	name: string;
	surname: string;
	email: string;
}

export interface TrainerByID extends Trainer {
	courses: [
		{
			id: number;
			name: string;
			course_model: {
				courseId: number;
				staffId: number;
			};
		}
	];
}
export interface TrainerData {
	type: string;
	payload: string;
}
