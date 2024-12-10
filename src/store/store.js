// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReduce from './counterSlice'
import liveEventsReducer from './liveEventsSlice'

const store = configureStore({
  reducer: {
    // Add your slice reducers here
    counter: counterReduce,
    liveEvent: liveEventsReducer
  },
});

export default store;