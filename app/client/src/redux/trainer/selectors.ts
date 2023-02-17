import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configApp/createStore';

const selectSelf = (state: RootState) => state;

const trainerSelector = createSelector(selectSelf, (state) => state.trainers.trainer);
const trainersSelector = createSelector(selectSelf, (state) => state.trainers.trainers);

const trainersMessageSelector = createSelector(selectSelf, (state) => state.trainers.message);

export { trainerSelector, trainersSelector, trainersMessageSelector };
