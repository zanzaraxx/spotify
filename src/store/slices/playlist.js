import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

export const getPlaylistsCollection = createAsyncThunk(
  "playlists/getPlaylistsCollection",
  async () => {
    try {
      const response = await apiService.getAllPlaylists();
      return response.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPlaylistsCollectionById = createAsyncThunk(
  "playlists/getPlaylistsCollectionById",
  async (id) => {
    try {
      const response = await apiService.getPlaylistsById(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

// export const getPlayer = createAsyncThunk(
//   "playlists/getPlayer",
//   async (id) => {
//     try {
//       const response = await PlaylistService.getPlayer(id);
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

const playlistsSlice = createSlice({
  name: "playlists",
  initialState: {
    playlistsCollection: [],
    // playerData: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getPlaylistsCollection.pending]: (state) => {
      state.isLoading = true;
    },
    [getPlaylistsCollection.fulfilled]: (state, action) => {
      state.playlistsCollection = action.payload;
    },
    [getPlaylistsCollectionById.fulfilled]: (state, action) => {
      const index = state.playlistsCollection.findIndex(
        ({ id }) => action.payload.id === id
      );
      state.playlistsCollection[index] = action.payload;
    },
    // [getPlayer.fulfilled]: (state, action) => {
    //   state.playerData = action.payload;
    // }
  },
});

export const playlistCollection = playlistsSlice.reducer;
