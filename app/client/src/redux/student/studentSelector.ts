import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configApp/createStore';

const selectSelf = (state: RootState) => state;

const studentsSelector = createSelector(selectSelf, (state) => state.students.students);
const studentSelector = createSelector(selectSelf, (state) => state.students.students);

export { studentsSelector, studentSelector };
