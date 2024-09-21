
import React, { useState } from 'react';
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

const registerEventFormData = [
  { name: 'eventName', label: 'Event Name', required: true },
  { name: 'startDate', label: 'Start Date', type: 'date', required: true },
  { name: 'endDate', label: 'End Date', type: 'date', required: true },
  { name: 'eventLogo', label: 'Event Logo URL' },
  { name: 'eventHead', label: 'Event Head', required: true },
  { name: 'phoneNumber', label: 'Contact Number', required: true },
  { name: 'contactEmail', label: 'Contact Email ID', required: true },
];

const EventRegisterPage = () => {
  const [formValues, setFormValues] = useState({
    eventName: '',
    eventType: 'single',
    startDate: '',
    endDate: '',
    eventLogo: '',
    eventHead: '',
    phoneNumber: '',
    contactEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // const response = await axios.get(
        //     `${process.env.REACT_APP_API_URL}/api/events`
        //   );
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
        });
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error registering event.');
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
      className
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register Event
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
          <Typography component="label" variant="subtitle1">
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register Event
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EventRegisterPage;
