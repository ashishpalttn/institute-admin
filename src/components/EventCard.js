// src/components/EventCard.js
import React from 'react';
import CustomizedSwitches from './Switch';

const EventCard = ({ event, onRegister }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-start">
      <img src={event.eventLogo} alt={event.eventName} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{event.eventName}</h3>
      <p className="text-gray-700">{event.eventType}</p>
      <p className="text-gray-500">From: {new Date(event.startDate).toLocaleDateString()}</p>
      <p className="text-gray-500">To: {new Date(event.endDate).toLocaleDateString()}</p>
      <p className="text-gray-600">Head: {event.eventHead}</p>
      <p className="text-gray-600">Phone: {event.phoneNumber}</p>
      <p className="text-gray-600">Contact: {event.contactEmail}</p>
      <div>
      <button
        onClick={() => onRegister(event)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Event
      </button>
      <button
        onClick={() => onRegister(event)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Delete
      </button>
      <CustomizedSwitches />
      </div>
    </div>
  );
};

export default EventCard;
