

import React from 'react';
import { FaFilter } from 'react-icons/fa'; // Importing FontAwesome icon
import styled from 'styled-components';

// Styled Component for the filter container
const FilterContainer = styled.div`
  display: flex;
  position:absolute;
  top:145px;
  left:540px;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: #fff;
`;

const Filter = ({ selectedGenre, onGenreChange }) => {
  return (
    <FilterContainer>
      {/* Icon for genre filter */}
      <FaFilter size={30} />
      
      {/* Genre Dropdown */}
      <Select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="All">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
        {/* Add more genres as needed */}
      </Select>
    </FilterContainer>
  );
};

export default Filter;
