import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { setupStore } from '../store'; // Assume you have a Redux store setup
import MovieList from './MovieList';
import { ThemeProvider } from 'styled-components';
import { server, rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock Theme
const mockTheme = {
  primary: '#007bff',
  cardBg: '#fff',
  text: '#333',
  inputBorder: '#ccc',
  primaryHover: '#0056b3',
  background: '#f4f4f4',
  navBg: '#007bff',
  navText: 'white',
};

// Mock Redux Store
const store = setupStore();

// Mock QueryClient
const queryClient = new QueryClient();

// Mock Server for API responses
const handlers = [
  rest.get('/movies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        Search: [
          { imdbID: '1', Title: 'Movie 1', Year: '2020', Poster: 'poster1.jpg' },
          { imdbID: '2', Title: 'Movie 2', Year: '2019', Poster: 'poster2.jpg' },
        ],
        totalResults: 2,
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MovieList', () => {
  const renderWithProviders = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={mockTheme}>
            <MovieList />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    );
  };

  it('displays a loading spinner initially', () => {
    renderWithProviders();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders a list of movies after fetching', async () => {
    renderWithProviders();

    // Wait for the movies to load
    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
    });

    // Verify images are rendered
    expect(screen.getByAltText('Movie 1')).toHaveAttribute('src', 'poster1.jpg');
    expect(screen.getByAltText('Movie 2')).toHaveAttribute('src', 'poster2.jpg');
  });

  it('displays "No movies found" when no movies are returned', async () => {
    server.use(
      rest.get('/movies', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ Search: [] }));
      })
    );

    renderWithProviders();

    await waitFor(() => {
      expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    server.use(
      rest.get('/movies', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders();

    await waitFor(() => {
      expect(screen.getByText(/error fetching movies/i)).toBeInTheDocument();
    });
  });

  it('filters movies by genre', async () => {
    renderWithProviders();

    // Wait for movies to load
    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
    });

    // Select a genre filter
    fireEvent.change(screen.getByLabelText(/filter by genre/i), {
      target: { value: 'Comedy' },
    });

    await waitFor(() => {
      expect(screen.queryByText('Movie 1')).not.toBeInTheDocument();
    });
  });

  it('sorts movies by year', async () => {
    renderWithProviders();

    // Wait for movies to load
    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
    });

    // Trigger sort
    fireEvent.click(screen.getByText(/sort/i));
    fireEvent.click(screen.getByText(/by year/i));

    // Validate sorting
    const movies = screen.getAllByRole('heading', { level: 3 });
    expect(movies[0]).toHaveTextContent('Movie 2');
    expect(movies[1]).toHaveTextContent('Movie 1');
  });
});