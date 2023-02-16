import { createSlice } from '@reduxjs/toolkit';
import { CourseSliceState } from '../../types/courses';

const initialState: CourseSliceState = {
  courses: [],
  course: [],
  success: '',
  failed: '',
};

const courseSlice = createSlice({
  name: 'courses',
  initialState: initialState,
  reducers: {
    createCourseAction: (state) => {},
    createCourseSuccesed: (state, action) => {
      state.course = action.payload;
    },
    createCourseFailed: (state) => {
      state.course = [];
    },
    getAllCoursesAction: (state) => {},
    getAllCoursesSuccesed: (state, action) => {
      state.courses = action.payload;
    },
    getAllCoursesFailed: (state) => {
      state.courses = [];
    },
    getCourseByIdAction: (state) => {},
    getCourseByIdSuccesed: (state, action) => {
      state.course = action.payload;
    },
    getCourseByIdFailed: (state, action) => {
      state.course = [];
      state.failed = action.payload;
    },
    updateCourseByIdAction: (state) => {},
    updateCourseByIdSuccesed: (state, action) => {
      state.success = action.payload;
    },
    updateCourseByIdFailed: (state, action) => {
      state.failed = action.payload;
    },
    deleteCourseByIdAction: () => {},
    deleteCourseByIdSuccesed: (state, action) => {
      state.success = action.payload;
    },
    deleteCourseByIdFailed: (state, action) => {
      state.failed = action.payload;
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
