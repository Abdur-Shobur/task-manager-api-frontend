import { RootState } from '@/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
	value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			if (state.value === 0) {
				state.value = 0;
				return;
			}
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 0;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount, reset } =
	counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const counting = (state: RootState) => state.counter.value;

export default counterSlice.reducer;