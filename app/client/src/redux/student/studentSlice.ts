import { createSlice } from '@reduxjs/toolkit';
import { StudentSliceState } from '../../types/students';

const initialState: StudentSliceState = {
	students: [],
	student: [],
	success: '',
	failed: '',
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
		getStudentByIdAction: (state) => {},
		getStudentByIdSuccesed: (state, action) => {
			state.student = action.payload;
		},
		getStudentByIdFailed: (state, action) => {
			state.student = [];
			state.failed = action.payload;
		},
		updateStudentByIdAction: () => {},
		updateStudentByIdSuccesed: (state, action) => {
			state.success = action.payload;
		},
		updateStudentByIdFailed: (state, action) => {
			state.failed = action.payload;
		},
		deleteStudentByIdAction: () => {},
		deleteStudentByIdSuccesed: (state, action) => {
			state.success = action.payload;
		},
		deleteStudentByIdFailed: (state, action) => {
			state.failed = action.payload;
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
} = studentSlice.actions;

export default studentSlice;
