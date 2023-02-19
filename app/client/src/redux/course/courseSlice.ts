import { createSlice } from '@reduxjs/toolkit';
import { TCourse } from '../../types/courses';

const initialState = {
	courses: [] as TCourse[],
	course: [] as TCourse[],
	message: {},
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
		getAllCoursesAction: (state) => {},
		getAllCoursesSuccesed: (state, action) => {
			state.courses = action.payload;
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
		updateCourseByIdAction: (state) => {},
		updateCourseByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		updateCourseByIdFailed: (state, action) => {
			state.message = action.payload;
		},
		deleteCourseByIdAction: () => {},
		deleteCourseByIdSuccesed: (state, action) => {
			state.message = action.payload;
		},
		deleteCourseByIdFailed: (state, action) => {
			state.message = action.payload;
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
} = courseSlice.actions;
export default courseSlice;
