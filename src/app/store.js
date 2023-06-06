import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from '../features/greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;
