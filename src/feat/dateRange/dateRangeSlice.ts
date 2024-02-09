import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

const initialState: DateRange | undefined = {
	from: new Date(),
	to: addDays(new Date(), 6),
};

export const dateRangeSlice = createSlice({
	name: 'dateRange',
	initialState,
	reducers: {
		updateDateRange(state, action: PayloadAction<DateRange | undefined>) {
			state.from = action.payload?.from;
			state.to = action.payload?.to;
		},
	},
});

export const { updateDateRange } = dateRangeSlice.actions;

export default dateRangeSlice.reducer;
