export interface ITrainer {
	// courses: any;
	id?: number;
	name: string;
	surname: string;
	email: string;
}

export interface TrainerByID extends ITrainer {
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

export interface TrainerSliceState {
	trainers: ITrainer[];
	trainer: TrainerByID[];
	message: {};
	error: boolean;
	loading: boolean;
}

export interface TrainerData {
	type: string;
	payload: string;
}

export interface TrainerId {
	id: string;
}

export interface Message {
	message: string;
}
