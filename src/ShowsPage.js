// ShowsPage.js
import React from 'react';
import './ShowsPage.css';
import comedy from './images/comedy.jpeg';
import drama from './images/drama.jpeg';
import music from './images/music.jpeg';
import dance from './images/dance.jpeg';
import talkshow from './images/talkshow.jpeg';
import magic from './images/magic.jpeg';
import showsbanner from './images/shows.webp';

const shows = [
  {
    image: comedy,
    date: '5th April 2025',
    time: '6:00 PM',
    venue: 'Theatre Hall',
    description: 'A night of laughter with the best stand-up comedians in town.'
  },
  {
    image: drama,
    date: '12th April 2025',
    time: '7:30 PM',
    venue: 'Drama Club',
    description: 'A heartwarming drama performance by local artists.'
  },
  {
    image: music,
    date: '18th April 2025',
    time: '8:00 PM',
    venue: 'City Concert Hall',
    description: 'Live music show featuring renowned bands and solo artists.'
  },
  {
    image: dance,
    date: '22nd April 2025',
    time: '5:00 PM',
    venue: 'Dance Studio',
    description: 'An energetic dance performance showcasing various styles.'
  },
  {
    image: talkshow,
    date: '25th April 2025',
    time: '4:00 PM',
    venue: 'Media Auditorium',
    description: 'Live talk show with famous personalities and audience interaction.'
  },
  {
    image: magic,
    date: '30th April 2025',
    time: '6:30 PM',
    venue: 'Magic Theater',
    description: 'Experience an evening of illusions and mind-blowing tricks.'
  }
];

const ShowCard = ({ show }) => (
  <div className="show-card">
    <img src={show.image} alt="Show" className="show-image" />
    <h3>{show.date}</h3>
    <p>{show.time} | {show.venue}</p>
    <p>{show.description}</p>
  </div>
);

const ShowsPage = () => (
  <div>
    <div className="header">
      <img src={showsbanner} alt="Shows" className="header-image" />
      <h1>SHOWS</h1>
    </div>
    <div className="shows-container">
      {shows.map((show, index) => (
        <ShowCard key={index} show={show} />
      ))}
    </div>
  </div>
);

export default ShowsPage;
