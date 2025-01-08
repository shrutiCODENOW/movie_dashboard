// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled Components
// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 20px;
//   background-color: ${(props) => props.theme.navBg};
//   color: #34495e;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
// `;

// const Logo = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   color: white;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-size: 16px;

//   &:hover {
//     color: ${(props) => props.theme.primaryHover};
//   }
// `;

// const NavigationBar = () => {
//   return (
//     <Nav>
//       <Logo>MovieApp</Logo>
//       <NavLinks>
//         <StyledLink to="/">Home</StyledLink>
//         <StyledLink to="/favorites">Favorites</StyledLink>
//       </NavLinks>
//     </Nav>
//   );
// };

// export default NavigationBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { useTheme } from './ThemeContext'; // Import the useTheme hook

// // Styled Components
// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 20px;
//   background-color: ${(props) => props.theme.navBg};
//   color: ${(props) => props.theme.navText};
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   color: white;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-size: 16px;

//   &:hover {
//     color: ${(props) => props.theme.primaryHover};
//   }
// `;

// const ThemeToggleButton = styled.button`
//   background-color: ${(props) => (props.theme === 'light' ? '#f39c12' : '#2ecc71')};
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   cursor: pointer;
//   font-size: 16px;
//   border-radius: 5px;
  
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const NavigationBar = () => {
//   const { theme, toggleTheme } = useTheme(); // Get the theme and toggle function

//   return (
//     <Nav>
//       <Logo>MovieApp</Logo>
//       <NavLinks>
//         <StyledLink to="/">Home</StyledLink>
//         <StyledLink to="/favorites">Favorites</StyledLink>
//       </NavLinks>
//       <ThemeToggleButton theme={theme} onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//       </ThemeToggleButton>
//     </Nav>
//   );
// };

// export default NavigationBar;

// NavigationBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { useTheme } from './ThemeContext'; // Import the ThemeContext hook

// // Styled Components
// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 20px;
//   background-color: ${(props) => props.theme.navBg};
//   color: ${(props) => props.theme.navText};
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   color: ${(props) => props.theme.navText};
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: ${(props) => props.theme.navText};
//   font-size: 16px;

//   &:hover {
//     color: ${(props) => props.theme.primaryHover};
//   }
// `;

// const ThemeToggleButton = styled.button`
//   background-color: ${(props) => props.theme.primary};
//   color: black;
//   border: none;
//   padding: 10px 15px;
//   cursor: pointer;
//   font-size: 16px;
//   border-radius: 5px;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const NavigationBar = () => {
//   const { theme, toggleTheme } = useTheme(); // Use theme and toggle function

//   return (
//     <Nav>
//       <Logo>MovieApp</Logo>
//       <NavLinks>
//         <StyledLink to="/">Home</StyledLink>
//         <StyledLink to="/favorites">Favorites</StyledLink>
//         <ThemeToggleButton onClick={toggleTheme}>
//           {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//         </ThemeToggleButton>
//       </NavLinks>
//     </Nav>
//   );
// };

// export default NavigationBar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext'; // Import Theme Context
import { FaSun, FaMoon } from 'react-icons/fa'; // Import Icons for Light and Dark mode

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.navBg};
  color: ${(props) => props.theme.navText};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.navText};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.navText};
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

// Icon for Theme Toggle
const ThemeToggleIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => props.theme.navText}; // Dynamic color based on theme
`;

const NavigationBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme

  return (
    <Nav>
      <Logo>MovieApp</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
        {/* Toggle Theme Icon */}
        <ThemeToggleIcon onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />} {/* Moon for Light, Sun for Dark */}
        </ThemeToggleIcon>
      </NavLinks>
    </Nav>
  );
};

export default NavigationBar;