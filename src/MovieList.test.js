// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Provider } from 'react-redux';
// import { setupStore } from './store'; // Assume you have a Redux store setup
// import MovieList from './MovieList';
// import { ThemeProvider } from 'styled-components';
// import { server, rest } from 'msw';
// import { setupServer } from 'msw/node';

// // Mock Theme
// const mockTheme = {
//   primary: '#007bff',
//   cardBg: '#fff',
//   text: '#333',
//   inputBorder: '#ccc',
//   primaryHover: '#0056b3',
//   background: '#f4f4f4',
//   navBg: '#007bff',
//   navText: 'white',
// };

// // Mock Redux Store
// const store = setupStore();

// // Mock QueryClient
// const queryClient = new QueryClient();

// // Mock Server for API responses
// const handlers = [
//   rest.get('/movies', (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json({
//         Search: [
//           { imdbID: '1', Title: 'Movie 1', Year: '2020', Poster: 'poster1.jpg' },
//           { imdbID: '2', Title: 'Movie 2', Year: '2019', Poster: 'poster2.jpg' },
//         ],
//         totalResults: 2,
//       })
//     );
//   }),
// ];

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('MovieList', () => {
//   const renderWithProviders = () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <Provider store={store}>
//           <ThemeProvider theme={mockTheme}>
//             <MovieList />
//           </ThemeProvider>
//         </Provider>
//       </QueryClientProvider>
//     );
//   };

//   it('displays a loading spinner initially', () => {
//     renderWithProviders();
//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });

//   it('renders a list of movies after fetching', async () => {
//     renderWithProviders();

//     // Wait for the movies to load
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//       expect(screen.getByText('Movie 2')).toBeInTheDocument();
//     });

//     // Verify images are rendered
//     expect(screen.getByAltText('Movie 1')).toHaveAttribute('src', 'poster1.jpg');
//     expect(screen.getByAltText('Movie 2')).toHaveAttribute('src', 'poster2.jpg');
//   });

//   it('displays "No movies found" when no movies are returned', async () => {
//     server.use(
//       rest.get('/movies', (req, res, ctx) => {
//         return res(ctx.status(200), ctx.json({ Search: [] }));
//       })
//     );

//     renderWithProviders();

//     await waitFor(() => {
//       expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
//     });
//   });

//   it('handles API errors gracefully', async () => {
//     server.use(
//       rest.get('/movies', (req, res, ctx) => {
//         return res(ctx.status(500));
//       })
//     );

//     renderWithProviders();

//     await waitFor(() => {
//       expect(screen.getByText(/error fetching movies/i)).toBeInTheDocument();
//     });
//   });

//   it('filters movies by genre', async () => {
//     renderWithProviders();

//     // Wait for movies to load
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//     });

//     // Select a genre filter
//     fireEvent.change(screen.getByLabelText(/filter by genre/i), {
//       target: { value: 'Comedy' },
//     });

//     await waitFor(() => {
//       expect(screen.queryByText('Movie 1')).not.toBeInTheDocument();
//     });
//   });

//   it('sorts movies by year', async () => {
//     renderWithProviders();

//     // Wait for movies to load
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//     });

//     // Trigger sort
//     fireEvent.click(screen.getByText(/sort/i));
//     fireEvent.click(screen.getByText(/by year/i));

//     // Validate sorting
//     const movies = screen.getAllByRole('heading', { level: 3 });
//     expect(movies[0]).toHaveTextContent('Movie 2');
//     expect(movies[1]).toHaveTextContent('Movie 1');
//   });
// });

// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
// import store from './store';
// import MovieList from './MovieList';

// // Mock Movie API response
// const server = setupServer(
//   rest.get('https://www.omdbapi.com/', (req, res, ctx) => {
//     const searchQuery = req.url.searchParams.get('s');
//     const page = req.url.searchParams.get('page');
//     if (searchQuery === 'random') {
//       return res(
//         ctx.json({
//           Search: [
//             { Title: 'Movie 1', Year: '2021', imdbID: 'id1', Poster: 'url1' },
//             { Title: 'Movie 2', Year: '2020', imdbID: 'id2', Poster: 'url2' },
//           ],
//           totalResults: '2',
//         })
//       );
//     }
//     return res(ctx.json({ Search: [], totalResults: '0' }));
//   }),

//   rest.get('https://www.omdbapi.com/', (req, res, ctx) => {
//     const movieId = req.url.searchParams.get('i');
//     if (movieId === 'id1') {
//       return res(
//         ctx.json({ imdbID: 'id1', Genre: 'Action', imdbRating: '7.5' })
//       );
//     }
//     if (movieId === 'id2') {
//       return res(
//         ctx.json({ imdbID: 'id2', Genre: 'Drama', imdbRating: '8.2' })
//       );
//     }
//     return res(ctx.status(404));
//   })
// );

// // Setup Query Client
// const queryClient = new QueryClient();

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// const renderWithProviders = (ui) => {
//   return render(
//     <Provider store={store}>
//       <QueryClientProvider client={queryClient}>
//         <BrowserRouter>{ui}</BrowserRouter>
//       </QueryClientProvider>
//     </Provider>
//   );
// };

// describe('MovieList Component', () => {
//   test('renders the loading state initially', () => {
//     renderWithProviders(<MovieList />);
//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });

//   test('renders the movie list after fetching', async () => {
//     renderWithProviders(<MovieList />);
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//       expect(screen.getByText('Movie 2')).toBeInTheDocument();
//     });
//   });

//   test('displays "No Movies Found" if no movies are returned', async () => {
//     server.use(
//       rest.get('https://www.omdbapi.com/', (req, res, ctx) =>
//         res(ctx.json({ Search: [], totalResults: '0' }))
//       )
//     );

//     renderWithProviders(<MovieList />);
//     await waitFor(() => {
//       expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
//     });
//   });

//   test('filters movies by genre', async () => {
//     renderWithProviders(<MovieList />);
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//     });

//     fireEvent.change(screen.getByLabelText(/filter by genre/i), {
//       target: { value: 'Action' },
//     });

//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//     });
//   });

//   test('searches for a movie when search bar is used', async () => {
//     renderWithProviders(<MovieList />);
//     fireEvent.change(screen.getByPlaceholderText(/search movies/i), {
//       target: { value: 'comedy' },
//     });
//     fireEvent.click(screen.getByText(/search/i));

//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument(); // Assuming response has Movie 1
//     });
//   });

//   test('paginates correctly', async () => {
//     renderWithProviders(<MovieList />);
//     await waitFor(() => {
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//     });

//     fireEvent.click(screen.getByText('Next')); // Simulating pagination click

//     await waitFor(() => {
//       // Mock server does not change response; you can adjust this based on test cases.
//       expect(screen.getByText('Movie 1')).toBeInTheDocument();
//     });
//   });
// });

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import MovieList from './MovieList';
import store from './store';

// Mock Movie API responses
const mockMovies = {
  Search: [
    {
      Title: 'Movie 1',
      Year: '2020',
      imdbID: '1',
      Poster: 'https://via.placeholder.com/150',
    },
    {
      Title: 'Movie 2',
      Year: '2021',
      imdbID: '2',
      Poster: 'https://via.placeholder.com/150',
    },
  ],
  totalResults: '2',
};

const server = setupServer(
  rest.get('https://www.omdbapi.com/', (req, res, ctx) => {
    return res(ctx.json(mockMovies));
  })
);

// Initialize Query Client
const queryClient = new QueryClient();

describe('MovieList Component', () => {
  // Start and stop MSW server
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const renderMovieList = () =>
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <MovieList />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

  it('renders the MovieList component', async () => {
    renderMovieList();

    // Wait for movies to load
    await waitFor(() => expect(screen.getByText(/Movie 1/i)).toBeInTheDocument());

    // Check if movies are rendered
    expect(screen.getByText(/Movie 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Movie 2/i)).toBeInTheDocument();
  });

  it('shows a loading spinner while fetching movies', async () => {
    renderMovieList();

    // Check for the spinner before movies are loaded
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for movies to load
    await waitFor(() => expect(screen.getByText(/Movie 1/i)).toBeInTheDocument());
  });

  it('displays "No movies found" if no movies match the query', async () => {
    server.use(
      rest.get('https://www.omdbapi.com/', (req, res, ctx) => {
        return res(ctx.json({ Search: [] }));
      })
    );

    renderMovieList();

    // Wait for movies to load
    await waitFor(() => expect(screen.getByText(/No movies found/i)).toBeInTheDocument());
  });

  it('filters movies based on genre', async () => {
    renderMovieList();

    // Wait for movies to load
    await waitFor(() => expect(screen.getByText(/Movie 1/i)).toBeInTheDocument());

    // Simulate selecting a genre (e.g., Action)
    fireEvent.change(screen.getByLabelText(/Genre/i), { target: { value: 'Action' } });

    // Check if no movies are shown for unmatched genres
    expect(screen.getByText(/No movies found/i)).toBeInTheDocument();
  });

  it('navigates to a movie details page when clicked', async () => {
    renderMovieList();

    // Wait for movies to load
    await waitFor(() => expect(screen.getByText(/Movie 1/i)).toBeInTheDocument());

    // Simulate clicking on a movie
    fireEvent.click(screen.getByText(/Movie 1/i));

    // Check if navigation happened (mock routes if needed)
    expect(global.window.location.pathname).toBe('/movie/1');
  });

  it('toggles sorting order on button click', async () => {
    renderMovieList();

    // Wait for movies to load
    await waitFor(() => expect(screen.getByText(/Movie 1/i)).toBeInTheDocument());

    // Simulate clicking the toggle sort order button
    const toggleButton = screen.getByText(/Sort Order/i);
    fireEvent.click(toggleButton);

    // Check if sort order toggled
    expect(screen.getByText(/Sort Order: Descending/i)).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText(/Sort Order: Ascending/i)).toBeInTheDocument();
  });
});