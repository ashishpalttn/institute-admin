// src/pages/LiveEvents.js
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';

const LiveEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = (event) => {
    // Handle event registration logic here
    console.log('Registering for event:', event);
  };

  if (loading) return <div>Loading events...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onRegister={handleRegister} />
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;
