import { configureStore } from '@reduxjs/toolkit';
import dateRangeReducer from '../feat/dateRange/dateRangeSlice';

export const store = configureStore({
	reducer: {
		dateRange: dateRangeReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
