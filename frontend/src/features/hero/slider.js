import React, { useEffect, useState } from 'react';
import './slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [1, 2, 3, 4]; // Add more slides if needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="slider">
        {slides.map((slide, index) => (
          <input
            key={index}
            type="radio"
            name="slider"
            className={`s${index + 1}`}
            checked={index === currentSlide}
          />
        ))}
        {slides.map((slide, index) => (
          <label key={index} htmlFor={`s${index + 1}`} className={`slide${index + 1}`}>  
          {slide}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Slider;
