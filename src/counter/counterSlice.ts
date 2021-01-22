import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  count: number;
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 5,
  } as CounterState,
  reducers: {
    incCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decCount(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});
export const { incCount, decCount } = counterSlice.actions;

export const selectCount = (storeState: { counter: CounterState }) =>
  storeState.counter.count;