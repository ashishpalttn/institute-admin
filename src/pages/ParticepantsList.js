import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from '../components/GenericTable';
import { useLocation } from 'react-router-dom';

const BASE_URL = `${process.env.REACT_APP_API_URL}/event-registration`

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const { eventName } = location?.state?.event || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/participant-list/${eventName}`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { header: 'SN.', field: 'sn' },
    { header: 'Student Name', field: 'studentName' },
    { header: 'Class', field: 'studentClass' },
    { header: 'Mobile No', field: 'mobileNo' },
    { header: 'Email', field: 'email' },
    { header: 'Guardian Name', field: 'guardianName' },
    { header: 'Event', field: 'eventName' },
    { header: 'Institute', field: 'instituteName' },
  ];

  const handleEdit = (student) => {
    // Handle edit functionality
    console.log('Edit student:', student);
  };

  const handleDelete = async (student) => {
    try{
      const response = await axios.delete(`${BASE_URL}/registrations/${student.id}`)
      setStudents(preStudents=> preStudents.filter(e=>e.id !==student.id))
    }catch(error){
      console.log("Error on Partecepent deletion ",error);
    }
    console.log('Delete student:', student);
  };

  if (loading) {
    return <p className="text-center p-4">Data loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
      <GenericTable 
        columns={columns} 
        data={students} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        />
    </div>
  );
};

export default StudentsList;
