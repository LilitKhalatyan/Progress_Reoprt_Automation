import { createSlice } from '@reduxjs/toolkit';
import { TCourse } from '../../types/courseTypes';

const initialState = {
	courses: [] as TCourse[],
	course: [] as TCourse[],
	message: {},
	loading: true,
};

const courseSlice = createSlice({
	name: 'courses',
	initialState: initialState,
	reducers: {
		createCourseAction: (state, action) => {},
		createCourseSuccesed: (state, action) => {
			state.message = action.payload;
		},
		createCourseFailed: (state, action) => {
			state.message = action.payload;
		},
		getAllCoursesAction: (state) => {
			state.loading = true;
		},
		getAllCoursesSuccesed: (state, action) => {
			state.courses = action.payload;
			state.loading = false;
		},
		getAllCoursesFailed: (state, action) => {
			state.message = action.payload;
		},
		getCourseByIdAction: (state, action) => {},
		getCourseByIdSuccesed: (state, action) => {
			state.course = action.payload;
		},
		getCourseByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		updateCourseByIdAction: (state, action) => {},
		updateCourseByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		updateCourseByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		deleteCourseByIdAction: (state, action) => {},
		deleteCourseByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		deleteCourseByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		courseReset: () => {
			return initialState;
		},
	},
});
export const {
	createCourseAction,
	createCourseSuccesed,
	createCourseFailed,
	getAllCoursesAction,
	getAllCoursesSuccesed,
	getAllCoursesFailed,
	getCourseByIdAction,
	getCourseByIdFailed,
	getCourseByIdSuccesed,
	updateCourseByIdAction,
	updateCourseByIdSuccesed,
	updateCourseByIdFailed,
	deleteCourseByIdAction,
	deleteCourseByIdSuccesed,
	deleteCourseByIdFailed,
	courseReset,
} = courseSlice.actions;
export default courseSlice;
