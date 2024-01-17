import { createSlice, configureStore } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'locations',
  initialState: {
    userLocations: [],
  },
  reducers: {
    startLocationSharing: (state, action) => {
      // Handle starting location sharing, update userLocations in state
    },
    stopLocationSharing: (state) => {
      // Handle stopping location sharing, update userLocations in state
    },
  },
});

export const { startLocationSharing, stopLocationSharing } = locationSlice.actions;

export const store = configureStore({
  reducer: {
    locations: locationSlice.reducer,
  },
});