import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';
import weatherReducer from './weatherSlice';

const store = configureStore({
  reducer: {
    city: cityReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
