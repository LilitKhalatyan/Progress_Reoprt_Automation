import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configApp/createStore';

const selectSelf = (state: RootState) => state;

const coursesSelector = createSelector(selectSelf, (state) => state.courses.courses);
const courseSelector = createSelector(selectSelf, (state) => state.courses.course);

export { coursesSelector, courseSelector };
