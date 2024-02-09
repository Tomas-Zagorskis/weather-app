import { configureStore } from '@reduxjs/toolkit';
import dateRangeReducer from '@/feat/dateRange/dateRangeSlice';
import locationsWeatherReducer from '@/feat/locationsWeather/locationsWeatherSlice';

export const store = configureStore({
	reducer: {
		dateRange: dateRangeReducer,
		locations: locationsWeatherReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
