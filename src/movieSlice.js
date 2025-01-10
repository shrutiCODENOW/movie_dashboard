
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',  // Search query
  page: 1,    // Current page for pagination
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setQuery, setPage } = movieSlice.actions;

export default movieSlice.reducer;
