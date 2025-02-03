import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_URL}/secure/student/student`;

export const getStudents = createAsyncThunk("student", async () => {
  try {
    const response = await axios.get(BASE_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.log("Error during fetch students", error);
  }
});

export const saveStudent = createAsyncThunk("student", async (student) => {
  try {
    const response = await axios.post(BASE_URL, student);
  } catch (error) {
    console.log("Error during student save", error);
  }
});

export const deleteStudent = createAsyncThunk("student", async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.log("Error during delete student", error);
  }
});
export const editStudent = createAsyncThunk("student", async (student) => {
  try {
    const response = await axios.put(`${BASE_URL}/${student.id}`, student, {
      withCredentials: true,
    });
  } catch (error) {
    console.log("Error during student update", error);
  }
});

const studentSlice = createSlice({
  name: "student",
  initialState: {
    studentData: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state, action) => {})
      .addCase(getStudents.fulfilled, (state, action) => {
        state.studentData = action.payload;
      });
  },
});

export const selectStudent = ({ student }) => student?.studentData;

export default studentSlice.reducer;
