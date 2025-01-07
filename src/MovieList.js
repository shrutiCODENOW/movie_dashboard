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
          

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setPage } from './movieSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from './MovieApi';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import styled from 'styled-components';

// Styled Components
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
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.movies.query);
  const page = useSelector((state) => state.movies.page);

  const randomKeywords = ['action', 'love', 'war', 'comedy', 'drama', 'horror'];

  useEffect(() => {
    if (!query) {
      const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
      dispatch(setQuery(randomQuery));
    }
  }, [dispatch, query, randomKeywords]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    keepPreviousData: true,
  });

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies!</div>;
  if (!data?.Search) return <div>No results found.</div>;

  return (
    <Container>
      <MovieGrid>
        {data.Search.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <MovieCard>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </MovieCard>
          </Link>
        ))}
      </MovieGrid>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(data.totalResults / 10)}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default MovieList;