import { WeatherData } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: WeatherData[] = [];

export const locationsWeatherSlice = createSlice({
	name: 'locations',
	initialState,
	reducers: {
		addLocationWeather(state, action: PayloadAction<WeatherData>) {
			state.push(action.payload);
		},
		removeLocationWeather(state, action: PayloadAction<string>) {
			state.splice(
				state.findIndex(item => item.id === action.payload),
				1,
			);
		},
	},
});

export const { addLocationWeather, removeLocationWeather } =
	locationsWeatherSlice.actions;

export default locationsWeatherSlice.reducer;
