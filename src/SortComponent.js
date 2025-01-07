import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSort } from 'react-icons/fa';

// Styled Components
const IconButton = styled.button`
  padding: 8px;
  background-color: ${(props) => props.theme.dropdownBg};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.dropdownBorder};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.dropdownHover};
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

// Sort Component
const Sort = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState('asc'); // Initial sort order

  const handleSortClick = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder); // Toggle sort order
    onSort(newOrder); // Pass updated order to parent
  };

  return (
    <IconButton onClick={handleSortClick}>
      <FaSort />
    </IconButton>
  );
};

export default Sort;