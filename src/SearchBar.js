// import React from 'react';
// import styled from 'styled-components';

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   padding: 20px;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border-radius: 8px;
//   width: 250px;
//   border: 1px solid ${(props) => props.theme.inputBorder};
//   outline: none;

//   &:focus {
//     border-color: ${(props) => props.theme.primary};
//   }
// `;

// const SearchBar = ({ query, setQuery }) => {
//   return (
//     <SearchContainer>
//       <SearchInput
//         type="text"
//         placeholder="Search for movies..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//     </SearchContainer>
//   );
// };

// export default SearchBar;

// SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  width: 250px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.primary};
  }
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.primary};
  //color: 34495E;
  color:white;
  border: none;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }
`;

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchButton onClick={onSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;