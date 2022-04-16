import React, { useState } from "react";
import "./style.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img className="carousel-image" src={slide} alt="images" />
            )}
          </div>
        );
      })}

      <div className="d-flex justify-content-between px-5">
        <div className="prev" onClick={() => prevSlide()}>
          prev
        </div>
        <div className="next" onClick={() => nextSlide()}>
          next
        </div>
      </div>
    </div>
  );
};

export default Carousel;
