import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;

// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
//   body {
//     background-color: ${(props) => (props.theme === 'light' ? '#f4f4f4' : '#121212')};
//     color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
//     font-family: Arial, sans-serif;
//     margin: 0;
//     padding: 0;
//     transition: background-color 0.3s ease, color 0.3s ease;
//   }

//   h1 {
//     font-size: 2rem;
//     font-weight: bold;
//   }

//   a {
//     text-decoration: none;
//     color: ${(props) => (props.theme === 'light' ? '#007bff' : '#3498db')};
//   }
// `;

// export default GlobalStyles;