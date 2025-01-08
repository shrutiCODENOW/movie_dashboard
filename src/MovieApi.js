// import axios from 'axios';

// const API_KEY = '44df212';
// const BASE_URL = 'https://www.omdbapi.com/';

// export const fetchMovies = async (query, page = 1) => {
//   const response = await axios.get(`${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`);
//   return response.data;
// };

// export const fetchMovieDetails = async (id) => {
//   const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
//   return response.data;
// };

// import axios from 'axios';

// const API_KEY = '44df212';
// const BASE_URL = 'https://www.omdbapi.com/';

// export const fetchMovies = async (query, page = 1, genre = '') => {
//   // Append genre if provided and if not 'All'
//   const genreParam = genre && genre !== 'All' ? `&genre=${genre}` : '';
  
//   const response = await axios.get(`${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}${genreParam}`);
//   return response.data;
// };

// export const fetchMovieDetails = async (id) => {
//   const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
//   return response.data;
// };

// import axios from 'axios';

// const API_KEY = '44df212';
// const BASE_URL = 'https://www.omdbapi.com/';

// export const fetchMovies = async (query, page = 1, genre = '') => {
//   // Include genre as part of the search query
//   let url = `${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`;
  
//   // Apply genre filter if it is provided
//   if (genre && genre !== 'All') {
//     url += `&genre=${genre}`;
//   }

//   const response = await axios.get(url);
//   return response.data;
// };

// export const fetchMovieDetails = async (id) => {
//   const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
//   return response.data;
// };

import axios from 'axios';

const API_KEY = '44df212';
const BASE_URL = 'https://www.omdbapi.com/';

// Function to fetch movies with IMDb ratings
export const fetchMovies = async (query, page = 1, genre = '') => {
  let url = `${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`;
  
  // Apply genre filter if provided
  if (genre && genre !== 'All') {
    url += `&genre=${genre}`;
  }

  // Fetch the initial search results
  const response = await axios.get(url);
  const data = response.data;

  // If no movies are found, return the response immediately
  if (!data.Search) {
    return data;
  }

  // Fetch full details for each movie to get IMDb ratings
  const moviesWithRatings = await Promise.all(
    data.Search.map(async (movie) => {
      const detailsResponse = await axios.get(`${BASE_URL}?i=${movie.imdbID}&apikey=${API_KEY}`);
      const detailsData = detailsResponse.data;
      // Add IMDb rating to the movie object
      return { ...movie, imdbRating: detailsData.imdbRating || '0.0' };
    })
  );

  // Return updated data with ratings
  return { ...data, Search: moviesWithRatings };
};

// Function to fetch detailed information about a specific movie
export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return response.data;
};

