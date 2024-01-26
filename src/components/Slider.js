import React from 'react'

const Slider = () => {
    return (
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://iqq6kf0xmf.gjirafa.net/images/81afb185-745c-4e39-919f-c9c557147de5/81afb185-745c-4e39-919f-c9c557147de5.jpeg?w=1920" alt="First slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  };
  
  export default Slider;