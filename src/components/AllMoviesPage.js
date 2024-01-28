import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllMoviesPage = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${currentPage + 1}`);
        const data = await response.json();

        if (data && data.total_pages && data.results) {
          setAllMovies(data.results);
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const visiblePages = 12;
  const startPage = Math.max(0, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages - 1, startPage + visiblePages - 1);


  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container mx-auto">
          <Link className="navbar-brand" to="/">
            Movie-app
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/all-movies">
                  All Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2 className="mt-4 text-center my-5">All Movies</h2>
      <div className="row">
        {allMovies.map(movie => (
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
      <div className="text-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={handlePrevPage}>&laquo; Previous</button>
            </li>
            {[...Array(endPage - startPage + 1)].map((_, index) => {
              const page = startPage + index + 1;
              return (
                <li key={page} className={`page-item ${page === currentPage + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(page)}>
                    {page}
                  </button>
                </li>
              );
            })}
            <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={handleNextPage}>Next &raquo;</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllMoviesPage;


{/* <div className="text-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
              <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
</div>  */}