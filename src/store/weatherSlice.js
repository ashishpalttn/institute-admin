import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
const BASE_URL_CITY = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}`

export const getWeather = createAsyncThunk("weather", async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log("getting error during weather fetch", error);
  }
});

export const getCityDetails = createAsyncThunk("city", async (cityName)=>{
    try {
        const response = await axios.get(`${BASE_URL}/${cityName}`);
        return response.data;
      } catch (error) {
        console.log("getting error during weather fetch", error);
      }
})


const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: [],
    stateData:[],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {})
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
      })
      .addCase(getCityDetails.pending, ()=>{
        state.isLoading = true
      })
      .addCase(getCityDetails.fulfilled, (state, action)={
        state.weatherData = action.payload
      })
  },
});

export const selectWeather = ({ weather }) => weather?.weatherData;

export default weatherSlice.reducer;
