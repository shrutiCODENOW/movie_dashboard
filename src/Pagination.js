import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
//   background-color: ${(props) => props.theme.buttonBg};
//   color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #B2BEB5;
    cursor: not-allowed;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <PageButton onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </PageButton>
      <span>{currentPage}</span>
      <PageButton onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;