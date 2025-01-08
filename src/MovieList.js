// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import styled from 'styled-components';
// import Pagination from './Pagination';

// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const [query, setQuery] = useState('batman');
//   const [page, setPage] = useState(1);

//   const { data, isLoading, error } = useQuery(
//     ['movies', query, page],
//     () => fetchMovies(query, page),
//     {
//       onError: (err) => console.error('Error fetching movies:', err),
//     }
//   );

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <MovieCard key={movie.imdbID}>
//             <img src={movie.Poster} alt={movie.Title} />
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//           </MovieCard>
//         ))}
//       </MovieGrid>

//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)} // assuming 10 results per page
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import Pagination from './Pagination';
// import styled from 'styled-components';

// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   width: 100%;
//   margin-bottom: 20px;
//   font-size: 16px;
// `;

// const MovieList = () => {
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState(1);

//   // React Query v5 - New Syntax
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page], // Query key
//     queryFn: () => fetchMovies(query, page), // Query function
//     keepPreviousData: true, // Keeps cached data while loading new data
//   });

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     setPage(1); // Reset to page 1 when searching
//   };

//   const handlePageChange = (newPage) => {
//     setPage(newPage); // Update page
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       <SearchInput
//         type="text"
//         placeholder="Search movies..."
//         value={query}
//         onChange={handleSearch}
//       />
//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <MovieCard key={movie.imdbID}>
//             <img src={movie.Poster} alt={movie.Title} />
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//           </MovieCard>
//         ))}
//       </MovieGrid>
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// import React, { useState, useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import Pagination from './Pagination';
// import styled from 'styled-components';

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// // const SearchInput = styled.input`
// //   padding: 10px;
// //   width: 100%;
// //   margin-bottom: 20px;
// //   font-size: 16px;
// // `;

// const MovieList = () => {
//   // Keywords for random searches
//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror', 'thriller', 'adventure', 'sci-fi', 'mystery'];
  
//   // State for query and page
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState(1);

//   // Set a random keyword on initial render
//   useEffect(() => {
//     const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//     setQuery(randomQuery); // Set a random keyword as the default query
//   }, []); // Run only once when the component mounts

//   // React Query for fetching movies
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page], // Query key
//     queryFn: () => fetchMovies(query, page), // Query function
//     enabled: !!query, // Only fetch if query is not empty
//     keepPreviousData: true, // Cache previous data for smooth transitions
//   });

//   // Handle search input change
//   const handleSearch = (e) => {
//     setQuery(e.target.value); // Update query
//     setPage(1); // Reset to page 1 when searching
//   };

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setPage(newPage); // Update page
//   };

//   // Loading and error handling
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       {/* <SearchInput
//         type="text"
//         placeholder="Search movies..."
//         value={query}
//         onChange={handleSearch}
//       /> */}
//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <MovieCard key={movie.imdbID}>
//             <img src={movie.Poster} alt={movie.Title} />
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//           </MovieCard>
//         ))}
//       </MovieGrid>
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setQuery, setPage } from './movieSlice';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import Pagination from './Pagination';
// import styled from 'styled-components';

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query); // Get query from Redux store
//   const page = useSelector((state) => state.movies.page);   // Get page from Redux store

//   // Keywords for random searches
//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror', 'thriller', 'adventure', 'sci-fi', 'mystery'];

//   // Set a random keyword on initial render
//   useEffect(() => {
//     if (!query) {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery)); // Dispatch action to set query in Redux
//     }
//   }, [dispatch, query, randomKeywords]);

//   // React Query for fetching movies
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page], // Query key
//     queryFn: () => fetchMovies(query, page), // Query function
//     enabled: !!query, // Only fetch if query is not empty
//     keepPreviousData: true, // Cache previous data for smooth transitions
//   });

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage)); // Update page in Redux store
//   };

//   // Loading and error handling
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <MovieCard key={movie.imdbID}>
//             <img src={movie.Poster} alt={movie.Title} />
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//           </MovieCard>
//         ))}
//       </MovieGrid>
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;
          

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setQuery, setPage } from './movieSlice';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import { Link } from 'react-router-dom';
// import Pagination from './Pagination';
// import styled from 'styled-components';

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

//   useEffect(() => {
//     if (!query) {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery));
//     }
//   }, [dispatch, query, randomKeywords]);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page],
//     queryFn: () => fetchMovies(query, page),
//     enabled: !!query,
//     keepPreviousData: true,
//   });

//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setQuery, setPage } from './movieSlice';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import { Link } from 'react-router-dom';
// import Pagination from './Pagination';
// import styled from 'styled-components';
// import SearchBar from './SearchBar';  // Import the SearchBar component

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

//   useEffect(() => {
//     if (!query) {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery));
//     }
//   }, [dispatch, query, randomKeywords]);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page],
//     queryFn: () => fetchMovies(query, page),
//     enabled: !!query,
//     keepPreviousData: true,
//   });

//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));
//   };

//   // Set search query from the SearchBar input
//   const handleSearchChange = (searchQuery) => {
//     dispatch(setQuery(searchQuery));
//     dispatch(setPage(1));  // Reset to page 1 on new search
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       <SearchBar query={query} setQuery={handleSearchChange} />  {/* Pass the query and setter function to the SearchBar */}
      
//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setQuery, setPage } from './movieSlice';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import { Link } from 'react-router-dom';
// import Pagination from './Pagination';
// import styled from 'styled-components';
// import SearchBar from './SearchBar';

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     if (!query) {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery));
//     }
//   }, [dispatch, query]);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page],
//     queryFn: () => fetchMovies(query, page),
//     enabled: !!query,
//     keepPreviousData: true,
//   });

//   const handleSearch = () => {
//     if (searchQuery) {
//       dispatch(setQuery(searchQuery));
//     } else {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery)); // Trigger random search when search bar is empty
//     }
//   };

//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />

//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>

//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setQuery, setPage } from './movieSlice';
// import { useQuery } from '@tanstack/react-query';
// import { fetchMovies } from './MovieApi';
// import { Link } from 'react-router-dom';
// import Pagination from './Pagination';
// import SearchBar from './SearchBar';
// import Sort from './SortComponent';
// import Filter from './FilterComponent';
// import styled from 'styled-components';


// const Container = styled.div`
//   padding: 20px;
// `;

// const Toolbar = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const [sortOrder, setSortOrder] = useState('asc');
//   const [filterGenre, setFilterGenre] = useState('');

//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

//   useEffect(() => {
//     if (!query) {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery));
//     }
//   }, [dispatch, query, randomKeywords]);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page],
//     queryFn: () => fetchMovies(query, page),
//     enabled: !!query,
//     keepPreviousData: true,
//   });

//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));
//   };

//   // Sorting Logic
//   const sortMovies = (movies) => {
//     return [...movies].sort((a, b) =>
//       sortOrder === 'asc' ? a.Title.localeCompare(b.Title) : b.Title.localeCompare(a.Title)
//     );
//   };

//   // Filtering Logic
//   const filterMovies = (movies) => {
//     if (filterGenre) {
//       return movies.filter((movie) => movie.Genre?.toLowerCase().includes(filterGenre));
//     }
//     return movies;
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   // Apply Sorting and Filtering
//   const processedMovies = sortMovies(filterMovies([...data.Search]));

//   return (
//     <Container>
//       {/* Toolbar with Search, Sort, and Filter */}
//       <Toolbar>
//         <SearchBar onSearch={(term) => dispatch(setQuery(term))} />
//         <Sort onSort={(order) => setSortOrder(order)} />
//         <Filter onFilter={(genre) => setFilterGenre(genre)} />
//       </Toolbar>
//       {/* Movie Grid */}
//       <MovieGrid>
//         {processedMovies.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// const Container = styled.div`
//   padding: 20px;
// `;

// const Toolbar = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const [sortOrder, setSortOrder] = useState('asc'); // Default sort order
//   const [filterGenre, setFilterGenre] = useState(''); // Default filter genre

//   // Random keywords if no search query
//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

//   useEffect(() => {
//     if (!query) {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery));
//     }
//   }, [dispatch, query, randomKeywords]);

//   // Fetch movies using react-query
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page],
//     queryFn: () => fetchMovies(query, page),
//     enabled: !!query,
//     keepPreviousData: true,
//   });

//   // Handle page change for pagination
//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));
//   };

//   // Sorting Logic
//   const sortMovies = (movies) => {
//     return [...movies].sort((a, b) =>
//       sortOrder === 'asc' ? a.Title.localeCompare(b.Title) : b.Title.localeCompare(a.Title)
//     );
//   };

//   // Filtering Logic
//   const filterMovies = (movies) => {
//     if (filterGenre && filterGenre !== 'All') {
//       // Filtering based on genre (mock data assumption for genre)
//       return movies.filter((movie) =>
//         movie.Title.toLowerCase().includes(filterGenre.toLowerCase())
//       );
//     }
//     return movies;
//   };

//   // Handle loading and errors
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   // Apply sorting and filtering
//   const processedMovies = sortMovies(filterMovies([...data.Search]));

//   return (
//     <Container>
//       {/* Toolbar with Search, Sort, and Filter */}
//       <Toolbar>
//         <SearchBar onSearch={(term) => dispatch(setQuery(term))} />
//         <Sort onSort={(order) => setSortOrder(order)} />
//         <Filter onFilter={(genre) => setFilterGenre(genre)} />
//       </Toolbar>

//       {/* Movie Grid */}
//       <MovieGrid>
//         {processedMovies.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>

//       {/* Pagination */}
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setPage } from './movieSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies, fetchMovieDetails } from './MovieApi';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Filter from './FilterComponent'; // Import the Filter component
import SortComponent from './SortComponent';


// Styled Components
// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterGenre, setFilterGenre] = useState(''); // For genre filter

//   useEffect(() => {
//     if (!query) {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery));
//     }
//   }, [dispatch, query]);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page, filterGenre], // Include filterGenre in queryKey
//     queryFn: () => fetchMovies(query, page, filterGenre), // Pass filterGenre to API call
//     enabled: !!query,
//     keepPreviousData: true,
//   });

//   const handleSearch = () => {
//     if (searchQuery) {
//       dispatch(setQuery(searchQuery));
//     } else {
//       const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
//       dispatch(setQuery(randomQuery)); // Trigger random search when search bar is empty
//     }
//   };

//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));
//   };

//   // Handling Filter change
//   const handleFilter = (genre) => {
//     setFilterGenre(genre); // Update filter genre
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No results found.</div>;

//   return (
//     <Container>
//       {/* Search Bar and Filter */}
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
//       <Filter onFilter={handleFilter} /> {/* Integrate Filter Component */}

//       <MovieGrid>
//         {data.Search.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>

//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}
//       />
//     </Container>
//   );
// };

// export default MovieList;

// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const [filterGenre, setFilterGenre] = useState('All');  // Genre filter state
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortCriteria, setSortCriteria] = useState('rating'); // Sorting criteria state (either 'rating' or 'year')

//   useEffect(() => {
//     if (!query) {
//       dispatch(setQuery('random'));  // Set random query if no query is set
//     }
//   }, [dispatch, query]);

//   // Fetch movies using React Query, apply genre filter
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page, filterGenre, sortCriteria],  // Add sortCriteria to the queryKey
//     queryFn: () => fetchMovies(query, page, filterGenre),  // Pass genre as argument
//     enabled: !!query,  // Ensure query is only fired when query is present
//     keepPreviousData: true,  // Keeps old data when switching pages or filters
//   });

//   // Handle search functionality
//   const handleSearch = () => {
//     if (searchQuery) {
//       dispatch(setQuery(searchQuery));  // Set search query
//     } else {
//       dispatch(setQuery('random'));  // Trigger random search if empty
//     }
//   };

//   // Handle page change functionality
//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));  // Set the new page
//   };

//   // Handle filter functionality
//   const handleFilter = (genre) => {
//     setFilterGenre(genre);  // Update filter genre and trigger query refetch
//   };

//   // Handle sorting functionality from SortComponent
//   const handleSortChange = (criteria) => {
//     setSortCriteria(criteria);  // Update sort criteria (either 'rating' or 'year')
//   };

//   // Sort the movies based on selected criteria
//   const sortedMovies = data?.Search?.sort((a, b) => {
//     if (sortCriteria === 'rating') {
//       return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);  // Sort by IMDb rating
//     }
//     if (sortCriteria === 'year') {
//       return parseInt(b.Year) - parseInt(a.Year);  // Sort by release year
//     }
//     return 0;  // No sorting if criteria is invalid
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No movies found for this genre.</div>;

//   return (
//     <Container>
//       {/* Search bar and filter */}
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
//       <Filter onFilter={handleFilter} />  {/* Integrating the Filter component */}
      
//       {/* Sort Component */}
//       <SortComponent onSortChange={handleSortChange} />

//       {/* Movie Grid */}
//       <MovieGrid>
//         {sortedMovies.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//               <p>{sortCriteria === 'rating' ? `Rating: ${movie.imdbRating}` : `Year: ${movie.Year}`}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>

//       {/* Pagination */}
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}  // Trigger page change
//       />
//     </Container>
//   );
// };

// export default MovieList;

// const Container = styled.div`
//   padding: 20px;
// `;

// const MovieGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 15px;
// `;

// const MovieCard = styled.div`
//   background: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
// `;

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.movies.query);
//   const page = useSelector((state) => state.movies.page);

//   const [filterGenre, setFilterGenre] = useState('All');  // Genre filter state
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortCriteria, setSortCriteria] = useState('rating'); // Sorting criteria state (either 'rating' or 'year')

//   useEffect(() => {
//     if (!query) {
//       dispatch(setQuery('random'));  // Set random query if no query is set
//     }
//   }, [dispatch, query]);

//   // Fetch movies using React Query, apply genre filter
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['movies', query, page, filterGenre, sortCriteria],  // Add sortCriteria to the queryKey
//     queryFn: () => fetchMovies(query, page, filterGenre),  // Pass genre as argument
//     enabled: !!query,  // Ensure query is only fired when query is present
//     keepPreviousData: true,  // Keeps old data when switching pages or filters
//   });

//   // Handle search functionality
//   const handleSearch = () => {
//     if (searchQuery) {
//       dispatch(setQuery(searchQuery));  // Set search query
//     } else {
//       dispatch(setQuery('random'));  // Trigger random search if empty
//     }
//   };

//   // Handle page change functionality
//   const handlePageChange = (newPage) => {
//     dispatch(setPage(newPage));  // Set the new page
//   };

//   // Handle filter functionality
//   const handleFilter = (genre) => {
//     setFilterGenre(genre);  // Update filter genre and trigger query refetch
//   };

//   // Handle sorting functionality from SortComponent
//   const handleSortChange = (criteria) => {
//     setSortCriteria(criteria);  // Update sort criteria (either 'rating' or 'year')
//   };

//   // Sort the movies based on selected criteria
//   const sortedMovies = data?.Search?.sort((a, b) => {
//     console.log(a);
//     if (sortCriteria === 'rating') {
//       //Safely handle missing or invalid ratings
//      const ratingA = parseFloat(a.imdbRating) || 0;
//     const ratingB = parseFloat(b.imdbRating) || 0;
   
//       return ratingB - ratingA;  // Sort by IMDb rating (descending)
//     }
//     if(sortCriteria === 'year') {
//       return parseInt(b.Year) - parseInt(a.Year);  // Sort by release year (descending)
//     }
   
//     return 0;  // No sorting if criteria is invalid
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching movies!</div>;
//   if (!data?.Search) return <div>No movies found for this genre.</div>;

//   return (
//     <Container>
//       {/* Search bar and filter */}
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
//       <Filter onFilter={handleFilter} />  {/* Integrating the Filter component */}
      
//       {/* Sort Component */}
//       <SortComponent onSortChange={handleSortChange} />

//       {/* Movie Grid */}
//       <MovieGrid>
//         {sortedMovies.map((movie) => (
//           <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
//             <MovieCard>
//               <img src={movie.Poster} alt={movie.Title} />
//               <h3>{movie.Title}</h3>
//               <p>{movie.Year}</p>
//               <p>{sortCriteria === 'rating' ? `Rating: ${movie.imdbRating}` : `Year: ${movie.Year}`}</p>
//             </MovieCard>
//           </Link>
//         ))}
//       </MovieGrid>

//       {/* Pagination */}
//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(data.totalResults / 10)}
//         onPageChange={handlePageChange}  // Trigger page change
//       />
//     </Container>
//   );
// };

// export default MovieList;




const Container = styled.div`
  padding: 20px;
  
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  
`;

const MovieCard = styled.div`
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.5s ease-in-out;

  &:hover{
    transform.scale(2.05);
  }
  

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
  }

  

  h3,p{
   textdecoration: none;
   margin:10px,0;
  }
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.movies.query);
  const page = useSelector((state) => state.movies.page);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('rating');
  const [selectedGenre, setSelectedGenre] = useState('All'); // Genre state

  //const[isMoviesLoaded, setIsMovieLoaded]=useState(false);
  useEffect(() => {
    if (!query) {
      dispatch(setQuery('random'));
    }
  }, [dispatch, query]);

  // Fetch movies
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    keepPreviousData: true,
  });

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
        filtered.sort((a, b) => {
          if (sortCriteria === 'rating') {
            return parseFloat(b.imdbRating || 0) - parseFloat(a.imdbRating || 0); // Sort by rating
          } else if (sortCriteria === 'year') {
            return parseInt(b.Year) - parseInt(a.Year); // Sort by year
          } else if (sortCriteria === 'alphabetical') {
            return a.Title.localeCompare(b.Title); // Sort alphabetically
          }
          return 0;
        });

        setFilteredMovies(filtered);
      });
    }
  }, [data, selectedGenre, sortCriteria]);

  const handleSearch = () => {
    dispatch(setQuery(searchQuery || 'random'));
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre); // Update selected genre
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies!</div>;
  if (!data?.Search) return <div>No results found.</div>;
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
      <SortComponent onSortChange={handleSortChange} />

      

      {/* Movie Grid */}
      <MovieGrid>
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <MovieCard>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
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