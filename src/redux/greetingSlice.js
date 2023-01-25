import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const greetingAPI = '/api/v1/greeting/greeting.json';
const greetingMethod = '/get/greeting';

const initialState = {};

export const GreetingThunk = createAsyncThunk(greetingMethod, async () => {
  const greeting = await (await (fetch(greetingAPI))).json();
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GreetingThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return {
        ...payload,
      };
    });
  },
});

export default greetingSlice.reducer;
