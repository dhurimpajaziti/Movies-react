import React, { useState } from 'react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? 'active' : ''}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? 'active' : ''}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className={activeIndex === 2 ? 'active' : ''}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src="https://iqq6kf0xmf.gjirafa.net/images/2396f8c3-1d60-4083-b412-9a5e38677a20/2396f8c3-1d60-4083-b412-9a5e38677a20.jpeg?w=1920" className="d-block w-100" alt="Cat" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src="https://iqq6kf0xmf.gjirafa.net/images/a98b91f6-7a3f-40e4-b230-717a16ad8581/a98b91f6-7a3f-40e4-b230-717a16ad8581.jpeg?w=1920" className="d-block w-100" alt="Dog" />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src="https://iqq6kf0xmf.gjirafa.net/images/fe85291c-3265-451a-89dd-fd784b96bfe5/fe85291c-3265-451a-89dd-fd784b96bfe5.jpeg?w=1920" className="d-block w-100" alt="Giraffe" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;