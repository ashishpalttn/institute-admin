// src/pages/LiveEvents.js
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchEvents, deleteEvent} from '../store/liveEventsSlice';
import { useDispatch, useSelector } from 'react-redux';



const LiveEvents = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {events, loading} = useSelector((state)=>state.liveEvent)
  useEffect(()=>{
    dispatch(fetchEvents())
  },[])

  const BASE_URL = `${process.env.REACT_APP_API_URL}/api/events`

  const handleDelete = (event) =>{
    dispatch(deleteEvent(event.id))
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
          <EventCard key={event.id} event={event} onDelete={handleDelete} onUpdate={handlUpdate} />
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;
