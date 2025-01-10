import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setPage } from './movieSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies, fetchMovieDetails } from './MovieApi';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import styled, {keyframes} from 'styled-components';
import SearchBar from './SearchBar';//Import Search Component
import Filter from './FilterComponent'; // Import the Filter component
import SortComponent from './SortComponent';//Import sort component



const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

const LoadingText = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.text};
`;

const NoMoviesFound = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight:bold;
  //color: ${(props) => props.theme.text};
  color:red;
`;
const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 123, 255, 0.2); /* Light blue */
  border-top: 5px solid rgba(0, 123, 255, 1); /* Darker blue */
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;




const Container = styled.div`
  padding: 20px;
  
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
   padding:20px;
  // position:relative;
  text-decoration:none;
  
`;

const MovieCard = styled.div`
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.3s;
  //display:flex;
  

  &:hover{
    transform:scale(1.2);
    text-decoration:none;
    box-shadow:0 8px 12px rgba(0,125,255,0.4);
  }
  

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
  }

 

//    &:hover{
//     transform.scale(1.05);
//     text-decoration:none;
//     box-shadow:0 8px 12px rgba(0,123,255,0.4);
//   }
  
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.movies.query);
  const page = useSelector((state) => state.movies.page);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('rating');
  const [selectedGenre, setSelectedGenre] = useState('All'); // Genre state
  const[isAscending, setIsAscending]=useState(true);

  //const[isMoviesLoaded, setIsMovieLoaded]=useState(false);
//   useEffect(() => {
//     if (!query) {
//       dispatch(setQuery('random'));
//     }
//   }, [dispatch, query]);

//Generates random movies when page is loaded
const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

  useEffect(() => {
    if (!query) {
      const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
      dispatch(setQuery(randomQuery));
    }
  }, [dispatch, query, randomKeywords]);

  // Fetch movies
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    keepPreviousData: true,
  });

  //Fetching for genre and IMDB rating
  const fetchGenresForMovies = async (movies) => {
    const movieDetails = await Promise.all(
      movies.map(async (movie) => {
        const details = await fetchMovieDetails(movie.imdbID); // Fetch details by ID
        return { ...movie, Genre: details.Genre, imdbRating: details.imdbRating }; // Append Genre and IMDb Rating
      })
    );
    return movieDetails;
  };

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (data?.Search) {
      fetchGenresForMovies(data.Search).then((moviesWithDetails) => {
        // Filter by genre
        const filtered = moviesWithDetails.filter((movie) => {
          if (selectedGenre === 'All') return true;
          return movie.Genre.includes(selectedGenre);
        });

        // Sort by criteria
        // filtered.sort((a, b) => {
        //   if (sortCriteria === 'rating') {
        //     return parseFloat(b.imdbRating || 0) - parseFloat(a.imdbRating || 0); // Sort by rating
        //   } else if (sortCriteria === 'year') {
        //     return parseInt(b.Year) - parseInt(a.Year); // Sort by year
        //   } else if (sortCriteria === 'alphabetical') {
        //     return a.Title.localeCompare(b.Title); // Sort alphabetically
        //   }
        //   return 0;
        // });

        filtered.sort((a, b) => {
            const multiplier= isAscending?1:-1;
            if (sortCriteria === 'rating') {
              return multiplier*(parseFloat(b.imdbRating || 0) - parseFloat(a.imdbRating || 0)); // Sort by rating
            } else if (sortCriteria === 'year') {
              return multiplier*(parseInt(b.Year) - parseInt(a.Year)); // Sort by year
            } else if (sortCriteria === 'alphabetical') {
              return multiplier*(a.Title.localeCompare(b.Title)); // Sort alphabetically
            }
            return 0;
          });

        setFilteredMovies(filtered);
      });
    }
  }, [data, selectedGenre, sortCriteria, isAscending]);

  const handleSearch = () => {
    dispatch(setQuery(searchQuery || 'random'));
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const toggleSortOrder=()=>{
    setIsAscending((prev) => !prev);
  };
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre); // Update selected genre
  };

//   if (isLoading) return <div>Loading...</div>;
  if (isLoading) return(<LoadingContainer><Spinner /><LoadingText>Loading...</LoadingText></LoadingContainer>);
  if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;
if (!data?.Search) return <NoMoviesFound>NO MOVIES FOUND.</NoMoviesFound>;

  return (
    <Container>
      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />

      {/* Filter by Genre */}
      <Filter selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />

      {/* Sorting */}
      {/* <SortComponent onSortChange={handleSortChange}  /> */}
      <SortComponent onSortChange={handleSortChange} 
      isAscending={isAscending} 
      onToggleOrder={toggleSortOrder} />

      

      {/* Movie Grid */}
      <MovieGrid>
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} style={{textDecoration:'none'}}>
            <MovieCard>
              <img src={movie.Poster} alt={movie.Title} /> 
              <h3>{movie.Title}</h3>
              {/* <p>{movie.Year}</p> */}
              {/* <p>IMDb Rating: {movie.imdbRating || 'N/A'}</p> */}
              {/* <p>Genre: {movie.Genre}</p> */}
              <p>{sortCriteria === 'rating' ? `Rating: ${movie.imdbRating}` : `Year: ${movie.Year}`}</p>
            </MovieCard>
          </Link>
        ))}
      </MovieGrid>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(data.totalResults / 10)}
        onPageChange={(newPage) => dispatch(setPage(newPage))}
      />
    </Container>
  );
};

export default MovieList;
