// ThemeContext.js
// import React, { createContext, useState, useContext } from 'react';

// // Create the Theme Context
// const ThemeContext = createContext();

// // ThemeProvider component
// export const ThemeProviderComponent = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // Default theme is 'light'

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook to use theme context
// export const useTheme = () => useContext(ThemeContext);

// ThemeContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create Theme Context
// const ThemeContext = createContext();

// export const ThemeProviderComponent = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // Default theme is light

//   // Toggle Theme Function
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//   };

//   // Update body background color dynamically
//   useEffect(() => {
//     document.body.style.backgroundColor = theme === 'light' ? '#f4f4f4' : '#71797E';
//     document.body.style.color = theme === 'light' ? '#333' : '#fff';
//   }, [theme]); // Update body color whenever theme changes

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom Hook
// export const useTheme = () => useContext(ThemeContext);

import { createContext } from 'react';
export const ThemeContext = createContext();
