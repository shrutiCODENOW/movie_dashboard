import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa'; // Import filter icon

const FilterContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FilterIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Dropdown = styled.select`
  position: absolute;
  top: 35px;
  left: 0;
  width: 150px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  z-index: 10;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const Filter = ({ onFilter }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = [
    'All',
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Thriller',
  ];

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    setDropdownVisible(false); // Close dropdown after selection
    onFilter(genre); // Apply filter immediately
  };

  return (
    <FilterContainer>
      {/* Filter Icon */}
      <FilterIcon onClick={() => setDropdownVisible(!isDropdownVisible)}>
        <FaFilter />
      </FilterIcon>

      {/* Dropdown Menu */}
      <Dropdown
        visible={isDropdownVisible}
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Dropdown>
    </FilterContainer>
  );
};

export default Filter;