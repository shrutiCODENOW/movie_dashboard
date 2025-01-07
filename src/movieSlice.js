// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   query: '', // Store search query or random keyword
//   page: 1,   // Current page
// };

// const movieSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {
//     setQuery: (state, action) => {
//       state.query = action.payload; // Update query
//       state.page = 1; // Reset page to 1 when query changes
//     },
//     setPage: (state, action) => {
//       state.page = action.payload; // Update page
//     },
//   },
// });

// export const { setQuery, setPage } = movieSlice.actions;
// export default movieSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  page: 1,
  selectedMovieId: null, // Store selected movie ID for details
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1; // Reset to page 1 when query changes
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSelectedMovieId: (state, action) => {
      state.selectedMovieId = action.payload; // Set selected movie ID
    },
  },
});

export const { setQuery, setPage, setSelectedMovieId } = movieSlice.actions;
export default movieSlice.reducer;