import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authSlice from '../redux/auth/authSlice';
import courseSlice from '../redux/course/courseSlice';

import saga from '../redux/saga';
import studentSlice from '../redux/student/studentSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [studentSlice.name]: studentSlice.reducer,
    [courseSlice.name]: courseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(saga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
