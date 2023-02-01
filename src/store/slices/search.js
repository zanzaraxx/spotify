import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

export const getSearchData = createAsyncThunk(
  "search/getSearchData",
  async (inputData) => {
    try {
      const response = await apiService.getSearchData(inputData);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchRes: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getSearchData.fulfilled]: (state, action) => {
      state.searchRes = action.payload;
    },
  },
});

export const searchData = searchSlice.reducer;
