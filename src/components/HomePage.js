import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import Navbar from './Navbar';

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0')
      .then(response => response.json())
      .then(data => {
        setTopMovies(data.results.slice(0, 8));
      })
      .catch(error => console.error('Error fetching top movies:', error));
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <div className="container mt-4">
        <Slider />
        <div className="mt-4">
          <h2>TOP MOVIES</h2>
          <div className="row">
            {topMovies.map(movie => (
              <div key={movie.id} className="col-md-3 mb-4">
                <div className="card">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Release Date: {movie.release_date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <Link to="/all-movies" className="btn btn-primary">
            View All Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;