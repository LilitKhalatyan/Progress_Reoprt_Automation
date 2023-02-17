export interface authState {
	name?: string;
	surname?: string;
	email: string;
	password?: string;
	courseId?: [];
}

export interface AuthData {
	type: string;
	payload: authState;
}
