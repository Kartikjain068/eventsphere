/* ConferencesPage.js */
import React from 'react';
import './ConferencePage.css';

import conference1 from './images/conference1.jpeg';
import conference2 from './images/conference2.jpeg';
import conference3 from './images/conference3.jpeg';
import conference4 from './images/conference4.jpeg';
import conference5 from './images/conference5.jpeg';
import conference6 from './images/conference6.jpeg';
import conferencebanner from './images/conferencesbanner.jpeg';

const conferences = [
    {
      image: conference1,
      title: 'Tech Innovation Summit',
      date: '10th July 2025',
      time: '9:00 AM',
      venue: 'Grand Hall',
      description: 'Explore the latest in technology and innovation with industry leaders.'
    },
    {
      image: conference2,
      title: 'Healthcare Future Conference',
      date: '15th July 2025',
      time: '10:00 AM',
      venue: 'City Convention Center',
      description: 'Discuss the future of healthcare with professionals and experts.'
    },
    {
      image: conference3,
      title: 'Green Energy Summit',
      date: '20th July 2025',
      time: '11:00 AM',
      venue: 'Eco Hall',
      description: 'A conference on renewable energy solutions and sustainability.'
    },
    {
      image: conference4,
      title: 'Global Marketing Expo',
      date: '25th July 2025',
      time: '1:00 PM',
      venue: 'Downtown Arena',
      description: 'Learn about the latest marketing trends and strategies from global experts.'
    },
    {
      image: conference5,
      title: 'AI & Robotics Conference',
      date: '30th July 2025',
      time: '3:00 PM',
      venue: 'Tech World Center',
      description: 'Dive into advancements in AI, machine learning, and robotics technology.'
    },
    {
      image: conference6,
      title: 'Financial Leadership Forum',
      date: '5th August 2025',
      time: '2:00 PM',
      venue: 'Capital Hall',
      description: 'Insights from financial experts on investment strategies and global markets.'
    }
  ];
  
  const ConferenceCard = ({ conference }) => (
    <div className="conference-card">
      <img src={conference.image} alt={conference.title} className="conference-image" />
      <h3>{conference.title}</h3>
      <p>{conference.date} | {conference.time}</p>
      <p>{conference.venue}</p>
      <p>{conference.description}</p>
    </div>
  );
  
  const ConferencesPage = () => (
    <div>
      <div className="header">
        <img src={conferencebanner} alt="Conferences" className="header-image" />
        <h1>CONFERENCES</h1>
      </div>
      <div className="conferences-container">
        {conferences.map((conference, index) => (
          <ConferenceCard key={index} conference={conference} />
        ))}
      </div>
    </div>
  );
  
  export default ConferencesPage;
  