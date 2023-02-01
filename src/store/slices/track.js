import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
  name: 'track',
  initialState: {
    currentTrack: null,
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentTrack = action.payload
      return state
    }
  },
})
export const trackReducer = trackSlice.reducer
export const { setCurrentSong } = trackSlice.actions
