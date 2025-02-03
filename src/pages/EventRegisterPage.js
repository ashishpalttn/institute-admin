
import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  Container,
} from '@mui/material';
import axios from 'axios'
import CustomizedSwitches from '../components/Switch';
import { useNavigate, useLocation } from 'react-router-dom';

const registerEventFormData = [
  { name: 'eventName', label: 'Event Name', required: true },
  { name: 'startDate', label: 'Start Date', type: 'date', required: true },
  { name: 'endDate', label: 'End Date', type: 'date', required: true },
  { name: 'eventLogo', label: 'Event Logo URL' },
  { name: 'eventHead', label: 'Event Head', required: true },
  { name: 'phoneNumber', label: 'Contact Number', required: true },
  { name: 'contactEmail', label: 'Contact Email ID', required: true },
  { name: 'fee', label: 'Fee', required: true },
];

const EventRegisterPage = () => {
const location = useLocation();
const navigate = useNavigate();

const {event} = location.state || []

  const [formValues, setFormValues] = useState({
    eventName: '',
    eventType: 'single',
    startDate: '',
    endDate: '',
    eventLogo: '',
    eventHead: '',
    phoneNumber: '',
    contactEmail: '',
    fee: 0,
    instituteName: 'svm',
    eventStatus: 'live'
  });

    // Populate form values when event is available
    useEffect(() => {
      if (event) {
        setFormValues({
          eventName: event.eventName || '',
          eventType: event.eventType || 'single',
          startDate: event.startDate ? event.startDate.split('T')[0] : '',
          endDate: event.endDate ? event.endDate.split('T')[0] : '',
          eventLogo: event.eventLogo || '',
          eventHead: event.eventHead || '',
          phoneNumber: event.phoneNumber || '',
          contactEmail: event.contactEmail || '',
          fee: event.fee || 0,
          instituteName: event.instituteName || 'svm',
          eventStatus: event.eventStatus || 'live',
        });
      }
    }, [event]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(event){
      try{
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/events/${event.id}`,
        formValues)
        if(response.data){
         navigate('/live-events') 
        }
       
      }
      catch(error){
        console.log("Error to update event",error)
      }
    }
    else{
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/events`,
        formValues
      );
      if (response.status === 201) {
        alert('Event registered successfully!');
        setFormValues({
          eventName: '',
          eventType: 'single',
          startDate: '',
          endDate: '',
          eventLogo: '',
          eventHead: '',
          phoneNumber: '',
          contactEmail: '',
          fee: 0,
          instituteName: 'svm',
          eventStatus: 'live'
        });
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error registering event.');
    }
  }
  };

  return (

    <Container component="main" maxWidth="lg">
      <div className=" flex-grow p-8 flex items-center justify-center">
      <div className="bg-white-700 shadow-lg rounded-lg p-8 max-w-6xl w-full">
      <Box
      className
        sx={{
          // marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {event?"Edit Event" :"Register Event"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {registerEventFormData.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type || 'text'}
              required={field.required || false}
              fullWidth
              value={formValues[field.name]}
              onChange={handleInputChange}
              InputLabelProps={field.type === 'date' ? { shrink: true } : undefined}
              sx={{ mb: 2 }}
            />
          ))}
          <Typography  component="label" variant="subtitle1">
            Event Type
          </Typography>
          <RadioGroup
            row
            name="eventType"
            value={formValues.eventType}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          >
            <FormControlLabel value="single" control={<Radio />} label="Single" />
            <FormControlLabel value="group" control={<Radio />} label="Group" />
          </RadioGroup>
          <div className='mb-6'>
            <Typography>Event Status </Typography>
                <RadioGroup
                row
                name="eventStatus"
                value={formValues.eventStatus}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              >
                <FormControlLabel value="off" control={<Radio />} label="Off" />
                {/* <FormControlLabel value="upcomming" control={<Radio />} label="Upcomming" /> */}
                <FormControlLabel value="live" control={<Radio />} label="Live" />
              </RadioGroup>
            
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            {event? 'Update Event': 'Register Event'}
          </Button>
        </Box>
      </Box>
      </div>
      </div>
    </Container>
  );
};

export default EventRegisterPage;
