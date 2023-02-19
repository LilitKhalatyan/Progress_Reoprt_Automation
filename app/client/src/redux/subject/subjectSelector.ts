import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configApp/createStore';

const selectSelf = (state: RootState) => state;

const subjectsSelector = createSelector(selectSelf, (state) => state.subjects.subjects);
const subjectSelector = createSelector(selectSelf, (state) => state.subjects.subject);

export { subjectsSelector, subjectSelector };
