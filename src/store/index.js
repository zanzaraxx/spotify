import { configureStore } from "@reduxjs/toolkit";
import { playlistCollection } from "./slices/playlist";
import { trackReducer } from './slices/track'
import { searchData } from './slices/search'


export default configureStore({
    reducer: {
        playlists: playlistCollection,
        track: trackReducer,
        searchData: searchData
    }
})
