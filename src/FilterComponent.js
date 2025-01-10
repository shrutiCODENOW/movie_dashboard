// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaFilter } from 'react-icons/fa'; // Import filter icon

// const FilterContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const FilterIcon = styled.div`
//   cursor: pointer;
//   font-size: 24px;
//   color: ${(props) => props.theme.text};

//   &:hover {
//     color: ${(props) => props.theme.primary};
//   }
// `;

// const Dropdown = styled.select`
//   position: absolute;
//   top: 35px;
//   left: 0;
//   width: 150px;
//   padding: 8px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   background-color: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   z-index: 10;
//   display: ${(props) => (props.visible ? 'block' : 'none')};
// `;

// const Filter = ({ onFilter }) => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedGenre, setSelectedGenre] = useState('');

//   const genres = [
//     'All',
//     'Action',
//     'Comedy',
//     'Drama',
//     'Horror',
//     'Romance',
//     'Sci-Fi',
//     'Thriller',
//   ];

//   const handleGenreChange = (e) => {
//     const genre = e.target.value;
//     setSelectedGenre(genre);
//     setDropdownVisible(false); // Close dropdown after selection
//     onFilter(genre); // Apply filter immediately
//   };

//   return (
//     <FilterContainer>
//       {/* Filter Icon */}
//       <FilterIcon onClick={() => setDropdownVisible(!isDropdownVisible)}>
//         <FaFilter />
//       </FilterIcon>

//       {/* Dropdown Menu */}
//       <Dropdown
//         visible={isDropdownVisible}
//         value={selectedGenre}
//         onChange={handleGenreChange}
//       >
//         {genres.map((genre) => (
//           <option key={genre} value={genre}>
//             {genre}
//           </option>
//         ))}
//       </Dropdown>
//     </FilterContainer>
//   );
// };

// export default Filter;

// const Dropdown = styled.select`
//   position: absolute;
//   top: 35px;
//   left: 0;
//   width: 150px;
//   padding: 8px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   background-color: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
//   z-index: 10;
//   display: ${(props) => (props.$visible ? 'block' : 'none')};  // Use $visible instead of visible
// `;

// const Filter = ({ onFilter }) => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedGenre, setSelectedGenre] = useState('');

//   const genres = [
//     'All', 'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller'
//   ];

//   const handleGenreChange = (e) => {
//     const genre = e.target.value;
//     setSelectedGenre(genre);
//     setDropdownVisible(false);  // Close dropdown after selection
//     onFilter(genre);  // Apply filter
//   };

//   return (
//     <FilterContainer>
//       {/* Filter Icon */}
//       <FilterIcon onClick={() => setDropdownVisible(!isDropdownVisible)}>
//         <FaFilter />
//       </FilterIcon>

//       {/* Dropdown Menu */}
//       <Dropdown
//         $visible={isDropdownVisible}  // Use $visible here
//         value={selectedGenre}
//         onChange={handleGenreChange}
//       >
//         {genres.map((genre) => (
//           <option key={genre} value={genre}>
//             {genre}
//           </option>
//         ))}
//       </Dropdown>
//     </FilterContainer>
//   );
// };
// export default Filter;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaFilter } from 'react-icons/fa'; // Filter Icon

// // Styled Components
// const FilterContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const FilterIcon = styled.div`
//   cursor: pointer;
//   font-size: 24px;
//   color: ${(props) => props.theme.text};

//   &:hover {
//     color: ${(props) => props.theme.primary};
//   }
// `;

// const Dropdown = styled.select`
//   padding: 8px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   background-color: ${(props) => props.theme.cardBg};
//   color: ${(props) => props.theme.text};
// `;

// const SubmitButton = styled.button`
//   padding: 10px 15px;
//   background-color: ${(props) => props.theme.primary};
//   color: white;
//   border-radius: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => props.theme.primaryHover};
//   }
// `;

// const Filter = ({ onFilter }) => {
//   const [selectedGenre, setSelectedGenre] = useState('');

//   const genres = [
//     'All', 'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller'
//   ];

//   const handleGenreChange = (e) => {
//     setSelectedGenre(e.target.value);
//   };

//   const handleSubmit = () => {
//     onFilter(selectedGenre); // Apply filter when submit button is clicked
//   };

//   return (
//     <FilterContainer>
//       <FilterIcon onClick={() => console.log('Filter clicked')}>
//         <FaFilter />
//       </FilterIcon>

//       <Dropdown value={selectedGenre} onChange={handleGenreChange}>
//         {genres.map((genre) => (
//           <option key={genre} value={genre}>
//             {genre}
//           </option>
//         ))}
//       </Dropdown>

//       <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
//     </FilterContainer>
//   );
// };

// export default Filter;

// import React from 'react';

// const Filter = ({ selectedGenre, onGenreChange }) => {
//   return (
//     <div>
//       <label>Filter by Genre:</label>
//       <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
//         <option value="All">All</option>
//         <option value="Action">Action</option>
//         <option value="Adventure">Adventure</option>
//         <option value="Comedy">Comedy</option>
//         <option value="Drama">Drama</option>
//         <option value="Horror">Horror</option>
//         <option value="Sci-Fi">Sci-Fi</option>
//       </select>
//     </div>
//   );
// };

// export default Filter;

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