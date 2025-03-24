/* PartiesPage.js */
import React from 'react';
import './PartiesPage.css';
import party1 from './images/party1.jpeg';
import party2 from './images/party2.jpeg';
import party3 from './images/party3.jpeg';
import party4 from './images/party4.jpeg';
import party5 from './images/party5.jpeg';
import party6 from './images/party6.jpeg';
import partybanner from './images/parties.jpeg'

const parties = [
  {
    image: party1,
    title: 'Summer Bash',
    date: '5th July 2025',
    time: '7:00 PM',
    venue: 'Ocean View Club',
    description: 'A beachside party with live DJ and refreshing drinks.'
  },
  {
    image: party2,
    title: 'Glow in the Dark',
    date: '12th July 2025',
    time: '9:00 PM',
    venue: 'Night Owl Lounge',
    description: 'A neon-themed party with vibrant decor and music.'
  },
  {
    image: party3,
    title: '80s Retro Night',
    date: '20th July 2025',
    time: '8:00 PM',
    venue: 'Club Nostalgia',
    description: 'Throwback to the 80s with retro music and fashion.'
  },
  {
    image: party4,
    title: 'Masquerade Ball',
    date: '25th July 2025',
    time: '10:00 PM',
    venue: 'Grand Ballroom',
    description: 'An elegant night of mystery with masks and music.'
  },
  {
    image: party5,
    title: 'Poolside Party',
    date: '30th July 2025',
    time: '5:00 PM',
    venue: 'Sunshine Resort',
    description: 'Enjoy a day of fun by the pool with games and refreshments.'
  },
  {
    image: party6,
    title: 'Bollywood Night',
    date: '3rd August 2025',
    time: '8:00 PM',
    venue: 'Star Club',
    description: 'Dance to Bollywood hits with vibrant lights and festive vibes.'
  }
];

const PartyCard = ({ party }) => (
  <div className="party-card">
    <img src={party.image} alt={party.title} className="party-image" />
    <h3>{party.title}</h3>
    <p>{party.date} | {party.time}</p>
    <p>{party.venue}</p>
    <p>{party.description}</p>
  </div>
);

const PartiesPage = () => (
  <div>
    <div className="header">
      <img src={partybanner} alt="Parties" className="header-image" />
      <h1>PARTIES</h1>
    </div>
    <div className="parties-container">
      {parties.map((party, index) => (
        <PartyCard key={index} party={party} />
      ))}
    </div>
  </div>
);

export default PartiesPage;