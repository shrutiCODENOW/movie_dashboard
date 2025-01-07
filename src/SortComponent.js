import React, { useState } from 'react';
import { FaSort } from 'react-icons/fa';  // Sorting icon
import styled from 'styled-components';

const SortContainer = styled.div`
  position: absolute;
  top:145px;
  left:410px;
  display:flex;
  display: inline-block;
  justify-content:flex-start;
`;

const SortButton = styled.button`
  padding: 10px 15px;
  height:40px;
  width:80px;
  background-color: ${(props) => props.theme.primary};
  color: 34495E;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }
`;

const SortOptions = styled.ul`
  position: absolute;
  top: 35px;
  right: 0;
  list-style: none;
  background-color: ${(props) => props.theme.cardBg};
  border: 1px solid ${(props) => props.theme.border};
  padding: 10px;
  margin: 0;
  width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const SortOption = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

const SortComponent = ({ onSortChange }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Toggle visibility of sort options

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleSortOptionClick = (criteria) => {
    onSortChange(criteria);  // Trigger the parent handler to update the sort order
    setDropdownVisible(false); // Close the dropdown after selection
  };

  return (
    <SortContainer>
      <SortButton onClick={toggleDropdown}>
        <FaSort /> Sort
      </SortButton>

      {isDropdownVisible && (
        <SortOptions>
          <SortOption onClick={() => handleSortOptionClick('rating')}>By Rating</SortOption>
          <SortOption onClick={() => handleSortOptionClick('year')}>By Year</SortOption>
        </SortOptions>
      )}
    </SortContainer>
  );
};

export default SortComponent;