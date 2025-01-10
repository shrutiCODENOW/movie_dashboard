// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import SearchBar from './SearchBar';
// //import MovieList from './MovieList';
// import MovieDetails from './MovieDetails';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <Provider store={store}>
//       <QueryClientProvider client={queryClient}>
//         <Router>
//           <SearchBar />
//           <Routes>
//             <Route path="/" element={<MovieDetails />} />
//             {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
//           </Routes>
//         </Router>
//       </QueryClientProvider>
//     </Provider>
//   );
// }

// export default App;

// import React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import MovieList from './MovieList';
// //import MovieDetails from './MovieDetails';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <div>
//         <h1>Movie Dashboard</h1>
//         <MovieList />
        
//       </div>
//     </QueryClientProvider>
//   );
// }

// export default App;

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// //import SearchBar from './components/SearchBar';
// import MovieList from './MovieList';
// import MovieDetails from './MovieDetails';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <Provider store={store}>
//       <QueryClientProvider client={queryClient}>
//         <Router>
//           <SearchBar />
//           <Routes>
//             <Route path="/" element={<MovieList />} />
//             <Route path="/movie/:id" element={<MovieDetails />} />
//           </Routes>
//         </Router>
//       </QueryClientProvider>
//     </Provider>
//   );
// }

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MovieList from './MovieList';
// import MovieDetails from './MovieDetails';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MovieList />} />
//         <Route path="/movie/:id" element={<MovieDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import MovieList from './MovieList'; // Movie list component
import MovieDetails from './MovieDetails'; // Movie details component
import { ThemeProviderComponent, useTheme } from './ThemeContext';
import NavigationBar from './NavigationBar';

// Create Query Client
const queryClient = new QueryClient();
const lightTheme={
  //primary:"007bff",
  primary:"#283747",
  cardBg:"#fff",
  text:'#333',
  inputBorder:"#ccc",
  
  primaryHover:"0056b3",
  background:"#f4f4f4",
  navBg:"#283747 ",
  navText:"white",
  // bodyBg:"#ffffff",
  bodyBg:"#F2F2F2",
  linkTextDecoration: 'none',
}

const darkTheme = {
  primary: '#1d1d1d',
  cardBg: '#333',
  text: '#fff',
  inputBorder: '#555',
  primaryHover: '#555',
  background: '#121212',
  navBg: '#1a1a1a',
  navText: '#fff',
  bodyBg:'#71797E'
};

function App() {
  const [theme, setTheme] = useState('light'); // State for theme

const toggleTheme = () => {
  setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
};

useEffect(() => {
  const body = document.body;
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  body.style.backgroundColor = currentTheme.bodyBg;
}, [theme]); // Dependency on theme to reapply whenever it changes

return (
  <QueryClientProvider client={queryClient}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  </QueryClientProvider>
);
}

export default App;