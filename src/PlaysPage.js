/* PlaysPage.js */
import React from 'react';
import './PlaysPage.css';

import playbanner from './images/play.jpeg';
import play1 from './images/play1.jpeg';
import play2 from './images/play2.jpeg';
import play3 from './images/play3.jpeg';
import play4 from './images/play4.jpeg';
import play5 from './images/play5.jpeg';
import play6 from './images/play6.jpeg';

const plays = [
  {
    image: play1,
    title: 'Romeo and Juliet',
    date: '12th July 2025',
    time: '7:00 PM',
    venue: 'City Theater',
    description: 'A tragic romance by William Shakespeare.'
  },
  {
    image: play2,
    title: 'Hamlet',
    date: '18th July 2025',
    time: '6:30 PM',
    venue: 'Grand Stage',
    description: 'The Prince of Denmark seeks revenge in this Shakespearean classic.'
  },
  {
    image: play3,
    title: 'Les Misérables',
    date: '25th July 2025',
    time: '8:00 PM',
    venue: 'Opera House',
    description: 'A musical adaptation of Victor Hugos novel.'
  },
  {
    image: play4,
    title: 'The Phantom of the Opera',
    date: '1st August 2025',
    time: '7:30 PM',
    venue: 'Royal Theater',
    description: 'A mysterious tale of love and obsession beneath the Paris Opera House.'
  },
  {
    image: play5,
    title: 'Macbeth',
    date: '5th August 2025',
    time: '7:00 PM',
    venue: 'Shakespearean Playhouse',
    description: 'A Scottish general descends into madness in this tragedy.'
  },
  {
    image: play6,
    title: 'A Midsummer Nights Dream',
    date: '10th August 2025',
    time: '5:00 PM',
    venue: 'Outdoor Amphitheater',
    description: 'A whimsical comedy of love and fantasy.'
  }
];

const PlayCard = ({ play }) => (
  <div className="play-card">
    <img src={play.image} alt={play.title} className="play-image" />
    <h3>{play.title}</h3>
    <p>{play.date} | {play.time}</p>
    <p>{play.venue}</p>
    <p>{play.description}</p>
  </div>
);

const PlaysPage = () => (
  <div>
    <div className="header">
      <img src={playbanner} alt="Plays" className="header-image" />
      <h1>PLAYS</h1>
    </div>
    <div className="plays-container">
      {plays.map((play, index) => (
        <PlayCard key={index} play={play} />
      ))}
    </div>
  </div>
);

export default PlaysPage;