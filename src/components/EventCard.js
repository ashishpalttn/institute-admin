// src/components/EventCard.js
import React from 'react';
import CustomizedSwitches from './Switch';
import { Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const EventCard = ({ event, onUpdate, onDelete }) => {
  const navigate = useNavigate()

  const handleOnParticepants = ()=>{
    navigate('/particepants',{state:{event}});
  }

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-start">
      <img src={event.eventLogo} alt={event.eventName} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{event.eventName}</h3>
      <p className="text-gray-700">{event.eventType}</p>
      <p className="text-gray-500">From: {new Date(event.startDate).toLocaleDateString()}</p>
      <p className="text-gray-500">To: {new Date(event.endDate).toLocaleDateString()}</p>
      <p className="text-gray-600">Event Head: {event.eventHead}</p>
      <p className="text-gray-600">Phone: {event.phoneNumber}</p>
      <p className="text-gray-600">Contact: {event.contactEmail}</p>
      <p className="text-gray-600">Fee: {event.fee}</p>
      <div className='text-gray-600 mt-2'>
            <Typography>Event Status: </Typography>
                <RadioGroup
                row
                name="eventStatus"
                value={event?.eventStatus}
                // onChange={handleInputChange}
                sx={{ mb: 2 }}
              >
                <FormControlLabel value="off" control={<Radio />} label="Off" />
                {/* <FormControlLabel value="upcomming" control={<Radio />} label="Upcomming" /> */}
                <FormControlLabel value="live" control={<Radio />} label="Live" />
              </RadioGroup>
            
          </div>
      <div className=''>
      <button
        onClick={() =>onUpdate(event)}
        className="mr-4 mt-2 bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600"
      >
        Update Event
      </button>
      <button
        onClick={() =>handleOnParticepants(event)}
        className="mr-4 mt-2 bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600"
      >
        Particepants
      </button>
      <button
        onClick={() => onDelete(event)}
        className="mt-4 bg-red-500 text-white px-4 py-1.5 rounded hover:bg-blue-600"
      >
        Delete
      </button>
 
      
      </div>
    </div>
  );
};

export default EventCard;
