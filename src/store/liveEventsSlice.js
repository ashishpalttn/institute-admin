import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/events`;

// Thunk to fetch events
export const fetchEvents = createAsyncThunk('events/fetchEvents', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL, {
        withCredentials: true 
      });
      return response.data; // Return events data
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch events');
    }
  });

  export const deleteEvent = createAsyncThunk('events/deleteEvent', async (eventId, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/${eventId}`);
      return eventId; // Return the ID of the deleted event
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete event');
    }
  });

const liveEventSlice = createSlice({
    name : 'liveEvents',
    initialState: {
        events: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
            builder
              // Fetch Events
              .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
              })
              .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })
        
              // Delete Event
              .addCase(deleteEvent.fulfilled, (state, action) => {
                state.events = state.events.filter(event => event.id !== action.payload);
              })
              .addCase(deleteEvent.rejected, (state, action) => {
                state.error = action.payload;
              });
    },

})

export default liveEventSlice.reducer;