// src/pages/LiveEvents.js
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import { useNavigate } from 'react-router-dom';
import { fetchEvents,createEvent, deleteEvent} from '../store/liveEventsSlice';
import { useDispatch, useSelector } from 'react-redux';
import GenericButton from '../components/GenericButton';
import GenericCreateEditDialog from '../components/GenericCreateEditDialog';



const LiveEvents = () => {
  const navigate = useNavigate()
  const [createEditDialogOpen,setCreateEditDialogOpen] = useState(false)
  const dispatch = useDispatch()
  const {events, loading} = useSelector((state)=>state.liveEvent)

  useEffect(()=>{
    dispatch(fetchEvents())
  },[])

  const handleDelete = (event) =>{
    dispatch(deleteEvent(event.id))
  }

  const handlUpdate = (event) => {
    navigate('/events/register',{state:{event}})
  };
  const openEventCreateDialogBox = () => {
    setCreateEditDialogOpen(true)
  }
  const handlecreateEventSubmit = (formData) => {
    dispatch(createEvent(formData))
  }


  if (loading) return <div>Loading events...</div>;
  return (
    <div className="p-6">
      <div className='flex justify-between'>
      <h1 className="text-2xl font-bold mb-4">Live Events</h1>
      <GenericButton
        label='Create Event'
        onClick={openEventCreateDialogBox}
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onDelete={handleDelete} onUpdate={handlUpdate} />
        ))}
      </div>
      <GenericCreateEditDialog
        open={createEditDialogOpen}
        onClose={() => setCreateEditDialogOpen(false)}
        columns={registerEventFormData}
        // row={editData}
        onSubmit={handlecreateEventSubmit}
        />
    </div>
  );
};

export default LiveEvents;

const registerEventFormData = [
  { fieldName: 'eventName', fieldKey: 'Event fieldName', required: true },
  { fieldName: 'startDate', fieldKey: 'Start Date', type: 'date', required: true },
  { fieldName: 'endDate', fieldKey: 'End Date', type: 'date', required: true },
  { fieldName: 'eventLogo', fieldKey: 'Event Logo URL' },
  { fieldName: 'eventHead', fieldKey: 'Event Head', required: true },
  { fieldName: 'phoneNumber', fieldKey: 'Contact Number', required: true },
  { fieldName: 'contactEmail', fieldKey: 'Contact Email ID', required: true },
  { fieldName: 'fee', fieldKey: 'Fee', required: true },
  { fieldName: 'eventType', fieldKey: 'Event Type', type: 'radioGroup', required: true },
  { fieldName: 'eventStatus', fieldKey: 'Event Status', type: 'radioGroup', required: true },
];
