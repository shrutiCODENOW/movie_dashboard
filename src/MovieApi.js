import axios from 'axios';

const API_KEY = '44df212';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return response.data;
};