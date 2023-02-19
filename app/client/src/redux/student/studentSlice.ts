import { createSlice } from '@reduxjs/toolkit';
import { TStudent } from '../../types/students';

const initialState = {
	students: [] as TStudent[],
	student: [] as TStudent[],
	message: {},
};

const studentSlice = createSlice({
	name: 'students',
	initialState: initialState,
	reducers: {
		getAllStudentsAction: (state) => {},
		getAllStudentsSuccesed: (state, action) => {
			state.students = action.payload;
		},
		getAllStudentsFailed: (state) => {
			state.students = [];
		},
		getStudentByIdAction: (state, action) => {},
		getStudentByIdSuccesed: (state, action) => {
			state.student = action.payload;
		},
		getStudentByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		updateStudentByIdAction: (state, action) => {},
		updateStudentByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		updateStudentByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		deleteStudentByIdAction: (state, action) => {},
		deleteStudentByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		deleteStudentByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		createStudentAction: (state, action) => {},
		createStudentSuccesed: (state, action) => {
			state.message = action.payload;
		},
		createStudentFailed: (state, action) => {
			state.message = action.payload;
		},
	},
});
export const {
	getAllStudentsAction,
	getAllStudentsSuccesed,
	getAllStudentsFailed,
	getStudentByIdAction,
	getStudentByIdFailed,
	getStudentByIdSuccesed,
	updateStudentByIdAction,
	updateStudentByIdSuccesed,
	updateStudentByIdFailed,
	deleteStudentByIdAction,
	deleteStudentByIdSuccesed,
	deleteStudentByIdFailed,
	createStudentAction,
	createStudentFailed,
	createStudentSuccesed,
} = studentSlice.actions;

export default studentSlice;
