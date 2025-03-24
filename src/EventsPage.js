// EventsPage.js
import React from 'react';
import './EventsPage.css';
import spring from './images/spring.jpeg';
import concert from './images/concert.jpeg';
import foodtruck from './images/foodtruck.jpeg';
import sports from './images/sports.jpeg';
import Expo from './images/Expo.jpeg';
import art from './images/art.jpeg';
import eventBanner from './images/events.jpg';


const events = [
  {
    image: spring,
    date: '25th March 2025',
    time: '5:00 PM',
    venue: 'Community Hall',
    description: 'Annual Spring Festival with cultural performances and food stalls.'
  },
  {
    image: concert,
    date: '1st April 2025',
    time: '3:00 PM',
    venue: 'City Park',
    description: 'Outdoor music concert featuring local bands and artists.'
  },
  {
    image: foodtruck,
    date: '10th April 2025',
    time: '7:00 PM',
    venue: 'Town Square',
    description: 'Food Truck Carnival with a variety of cuisines and entertainment.'
  },
  {
    image: sports,
    date: '15th April 2025',
    time: '11:00 AM',
    venue: 'Sports Arena',
    description: 'Inter-school sports competition with various games and activities.'
  },
  {
    image: Expo,
    date: '20th April 2025',
    time: '6:00 PM',
    venue: 'Convention Center',
    description: 'Business Expo showcasing local entrepreneurs and startups.'
  },
  {
    image: art,
    date: '30th April 2025',
    time: '4:00 PM',
    venue: 'Art Gallery',
    description: 'Art Exhibition featuring works of emerging artists and photographers.'
  }
];

const EventCard = ({ event }) => (
  <div className="event-card">
    <img src={event.image} alt="Event" className="event-image" />
    <h3>{event.date}</h3>
    <p>{event.time} | {event.venue}</p>
    <p>{event.description}</p>
  </div>
);

const EventsPage = () => (
  <div>
    <div className="header">
    <img src={eventBanner} alt="Events" className="header-image" />

      <h1>EVENTS</h1>
    </div>
    <div className="events-container">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  </div>
);

export default EventsPage;