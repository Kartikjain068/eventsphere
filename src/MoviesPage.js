// MoviesPage.js
import React from 'react';
import './MoviesPage.css';
import movie1 from './images/movie1.jpeg';
import movie2 from './images/movie2.jpeg';
import movie3 from './images/movie3.jpeg';
import movie4 from './images/movie4.jpeg';
import movie5 from './images/movie5.jpeg';
import movie6 from './images/movie6.jpeg';
import moviesbanner from './images/movie.jpeg'

const movies = [
  {
    image: movie1,
    title: 'Inception',
    date: '15th May 2025',
    time: '6:30 PM',
    venue: 'City Cinema',
    description: 'A sci-fi thriller that explores the world of dreams and subconscious minds.'
  },
  {
    image: movie2,
    title: 'Titanic',
    date: '20th May 2025',
    time: '8:00 PM',
    venue: 'Grand Theater',
    description: 'A tragic love story set aboard the ill-fated RMS Titanic.'
  },
  {
    image: movie3,
    title: 'Interstellar',
    date: '25th May 2025',
    time: '7:00 PM',
    venue: 'IMAX Arena',
    description: 'A mind-bending space exploration film exploring time, gravity, and love.'
  },
  {
    image: movie4,
    title: 'The Dark Knight',
    date: '30th May 2025',
    time: '5:00 PM',
    venue: 'Downtown Theater',
    description: 'Batman faces off against the Joker in this iconic superhero thriller.'
  },
  {
    image: movie5,
    title: 'Frozen',
    date: '5th June 2025',
    time: '4:00 PM',
    venue: 'Family Fun Cinema',
    description: 'A heartwarming animated adventure featuring the magical tale of two sisters.'
  },
  {
    image: movie6,
    title: 'Gladiator',
    date: '10th June 2025',
    time: '7:30 PM',
    venue: 'Royal Cinemas',
    description: 'An epic historical drama following the journey of a betrayed Roman general.'
  },
];

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.image} alt={movie.title} className="movie-image" />
    <h3>{movie.title}</h3>
    <p>{movie.date} | {movie.time}</p>
    <p>{movie.venue}</p>
    <p>{movie.description}</p>
  </div>
);

const MoviesPage = () => (
  <div>
    <div className="header">
      <img src={moviesbanner} alt="Movies" className="header-image" />
      <h1>MOVIES</h1>
    </div>
    <div className="movies-container">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  </div>
);

export default MoviesPage;
