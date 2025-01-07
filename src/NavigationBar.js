import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.navBg};
  color: #34495e;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
  }
`;

const NavigationBar = () => {
  return (
    <Nav>
      <Logo>MovieApp</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default NavigationBar;