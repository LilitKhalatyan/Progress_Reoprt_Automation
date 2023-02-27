import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configApp/createStore';

const selectSelf = (state: RootState) => state;

const subjectsSelector = createSelector(selectSelf, (state) => state.subjects.subjects);
const loadingSelector = createSelector(selectSelf, (state) => state.subjects.loading);
const subjectSelector = createSelector(selectSelf, (state) => state.subjects.subject);
const messageSelector = createSelector(selectSelf, (state) => state.subjects.message);

export { subjectsSelector, subjectSelector, loadingSelector, messageSelector };
