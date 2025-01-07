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

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MovieList from './MovieList';
//import MovieDetails from './MovieDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Movie Dashboard</h1>
        <MovieList />
        
      </div>
    </QueryClientProvider>
  );
}

export default App;

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