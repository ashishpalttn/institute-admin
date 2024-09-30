// src/pages/LiveEvents.js
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LiveEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const BASE_URL = `${process.env.REACT_APP_API_URL}/api/events`

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);


  const handleOnDelete = async (event)=>{
    const isConfirmed = window.confirm(`Are you sure you want to delete the event "${event.eventName}"?`);
    if(isConfirmed){
    try{
    const responce = await axios.delete(`${BASE_URL}/${event.id}`);
    setEvents(prevEvents => prevEvents.filter(e => e.id !== event.id));
    }
    catch(error){
      console.log(error);
    }
    }
  }

  const handlUpdate = (event) => {
    navigate('/events/register',{state:{event}})
  };

  if (loading) return <div>Loading events...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onDelete={handleOnDelete} onUpdate={handlUpdate} />
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;
