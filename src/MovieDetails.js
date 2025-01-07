import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from './MovieApi';
import styled from 'styled-components';
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
  top:10px;
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


const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL params
  const navigate = useNavigate();

  // React Query to fetch movie details
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
  });

  // Loading and error handling
  if (isLoading) return <div>Loading...</div>;
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