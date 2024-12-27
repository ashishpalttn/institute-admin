import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TEST_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};
export const getTestData = createAsyncThunk("test/getTestData", async ()=>{
    const response = await axios.get(TEST_URL);
    return response.data;
})

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTestData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTestData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getTestData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectTestData = ({testData}) => testData.data;
export default testSlice.reducer;