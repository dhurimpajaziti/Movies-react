import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AllMoviesPage from './components/AllMoviesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-movies" element={<AllMoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;