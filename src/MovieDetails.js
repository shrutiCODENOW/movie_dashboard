import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from './MovieApi';
import styled, {keyframes} from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

// Styled Components
const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  padding: 20px;
  align-items:flex-start;
  justify-content:center;
  text-align: center;
`;

const MovieImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit:cover;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow:0 4px 6px rgba(0,0,0,0.1);
`;

const MovieInfo = styled.div`
  max-width: 600px;
  height:350px;
  margin: 0 auto;
  flex:1;
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  padding: 30px;
  border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  display: inline-block;
  position:absolute;
  right:50px;
  top:100px;
  margin-top: 20px;
  padding: 10px 20px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  text-decoration: none;
  border-radius: 5px;
  cursor:pointer;
  &:hover {
    background: ${(props) => props.theme.buttonHover};
  }
`;

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
  color: ${(props) => props.theme.text};
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


const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL params
  const navigate = useNavigate();

  // React Query to fetch movie details
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
  });

  // Loading and error handling
//   if (isLoading) return <div>Loading...</div>;
if (isLoading) return(<LoadingContainer><Spinner /><LoadingText>Loading...</LoadingText></LoadingContainer>);
  if (error) return <div>Error loading movie details!</div>;
  if (!data) return <div>No details available!</div>;

  return (
    <div>
        <BackButton onClick={()=>navigate('/')}>Back to Movies</BackButton>
    <Container>
      <MovieImage src={data.Poster} alt={data.Title} />
      <MovieInfo>
        <h2>{data.Title}</h2>
        <p><strong>Year:</strong> {data.Year}</p>
        <p><strong>Genre:</strong> {data.Genre}</p>
        <p><strong>Director:</strong> {data.Director}</p>
        <p><strong>Actors:</strong> {data.Actors}</p>
        <p><strong>Plot:</strong> {data.Plot}</p>
        <p><strong>IMDB Rating:</strong> {data.imdbRating}</p>
      </MovieInfo>
      {/* <BackButton to="/">Back to Movies</BackButton> */}
    </Container>
    </div>
  );
};

export default MovieDetails;