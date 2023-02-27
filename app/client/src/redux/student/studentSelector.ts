import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configApp/createStore';

const selectSelf = (state: RootState) => state;

const studentsSelector = createSelector(selectSelf, (state) => state.students.students);
const loadingSelector = createSelector(selectSelf, (state) => state.students.loading);
const studentSelector = createSelector(selectSelf, (state) => state.students.student);
const messageSelector = createSelector(selectSelf, (state) => state.students.message);

export { studentsSelector, studentSelector, loadingSelector, messageSelector };
