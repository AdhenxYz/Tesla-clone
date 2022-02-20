import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Car/carsSlice'

export const store = configureStore({
  reducer: {
    car : carReducer,
  },
});
