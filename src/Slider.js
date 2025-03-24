import React, { useState } from 'react';
import './Slider.css';

// Import your pre-saved images
import panel1 from './images/confrences.jpeg';
import panel2 from './images/events.jpg';
import panel3 from './images/movie.jpeg';
import panel4 from './images/parties.jpeg';
import panel5 from './images/shows.webp';
import panel6 from './images/weddings.jpeg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your slides with the imported images
  const slides = [
    { id: 1, content: 'Conferences', image: panel1 },
    { id: 2, content: 'Events', image: panel2 },
    { id: 3, content: 'Movies', image: panel3 },
    { id: 4, content: 'Parties', image: panel4 },
    { id: 5, content: 'Shows', image: panel5 },
    { id: 6, content: 'Weddings', image: panel6 }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div
          className="slider-inner"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }} // Shift by 100vw to move each slide
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <img
                src={slide.image} // Use the imported image here
                alt={`Slide ${slide.id}`}
                className="slide-image"
              />
              <h2>{slide.content}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls">
        {/* Navigation Arrows */}
        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Slider;
