import { createSlice } from '@reduxjs/toolkit';
import { TSubject } from '../../types/subjectTypes';

const initialState = {
	subjects: [] as TSubject[],
	subject: [] as TSubject[],
	message: {},
	loading: true,
};

const subjectSlice = createSlice({
	name: 'subjects',
	initialState: initialState,
	reducers: {
		createSubjectAction: (state, action) => {},
		createSubjectSuccesed: (state, action) => {
			state.message = action.payload;
		},
		createSubjectFailed: (state, action) => {
			state.message = action.payload;
		},
		getAllSubjectAction: (state) => {
			state.loading = true;
		},
		getAllSubjectSuccesed: (state, action) => {
			state.subjects = action.payload;
			state.loading = false;
		},
		getAllSubjectFailed: (state, action) => {
			state.message = action.payload;
		},
		getSubjectByIdAction: (state, action) => {},
		getSubjectByIdSuccesed: (state, action) => {
			state.subject = action.payload;
		},
		getSubjectByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		updateSubjectByIdAction: (state) => {},
		updateSubjectByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		updateSubjectByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		deleteSubjectByIdAction: () => {},
		deleteSubjectByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		deleteSubjectByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		subjectReset: () => {
			return initialState;
		},
	},
});
export const {
	createSubjectAction,
	createSubjectSuccesed,
	createSubjectFailed,
	getAllSubjectAction,
	getAllSubjectSuccesed,
	getAllSubjectFailed,
	updateSubjectByIdAction,
	updateSubjectByIdSuccesed,
	updateSubjectByIdFailed,
	deleteSubjectByIdAction,
	deleteSubjectByIdSuccesed,
	deleteSubjectByIdFailed,
	getSubjectByIdAction,
	getSubjectByIdFailed,
	getSubjectByIdSuccesed,
	subjectReset,
} = subjectSlice.actions;
export default subjectSlice;
