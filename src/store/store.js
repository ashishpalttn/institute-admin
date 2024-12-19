// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReduce from './counterSlice';
import liveEventsReducer from './liveEventsSlice';
import studentSlice from './studentSlice';

const store = configureStore({
  reducer: {
    // Add your slice reducers here
    counter: counterReduce,
    liveEvent: liveEventsReducer,
    student: studentSlice
  },
});

export default store;