import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { buildQueries } from '@testing-library/react';
import axios from 'axios';

// const BASE_URL = 'https://dummyjson.com/products'

const BASE_URL = `${process.env.REACT_APP_API_URL}/secure/student/get-all`


export const getStudents = createAsyncThunk('student', async ()=>{
    try{
        const response = await axios.get(BASE_URL,{withCredentials:true})
        return response.data
        
    }catch(error){

    }

})

export const saveStudent = createAsyncThunk()

export const deleteStudent = createAsyncThunk()

const studentSlice = createSlice({
    name:'student',
    initialState: {
        studentData:[],
        isLoading: false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getStudents.pending,(state, action)=>{
          
        })
        .addCase(getStudents.fulfilled,(state,action)=>{
            state.studentData = action.payload
        })
    }
})

export const selectStudent = ({student})=> student?.studentData;

export default studentSlice.reducer