import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from '../components/GenericTable';
import { useLocation } from 'react-router-dom';
import { ExportStudents } from '../components/ExportStudents';

const BASE_URL = `${process.env.REACT_APP_API_URL}/event-registration`

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  // State to handle dialog visibility
  const [selectedStudent, setSelectedStudent] = useState(null); 
  const location = useLocation();

  const { eventName } = location?.state?.event || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/participant-list/${eventName}`,
          {withCredentials:true}
        );
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  const handleEditSubmit = async (updatedData) => {
    try {
      // Send updated data to the server (implement PUT API here)
      await axios.put(`${BASE_URL}/registrations/${updatedData.id}`, updatedData, {withCredentials:true});
      // Update the student list in the frontend
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === updatedData.id ? updatedData : student
        )
      );
    } catch (error) {
      console.error('Error updating data:', error);
    }
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
    {/* <ExportStudents className="" eventName={eventName}/> */}

  return (
    <div>
      <GenericTable
        tableTitle="Registered Students"
        columns={columns} 
        rows={students} 
        handleEditSubmit={handleEditSubmit} 
        onDelete={handleDelete}
        button= {{
          label: "Export Participents",
        }}
        />
    </div>
  );
};

export default StudentsList;


const columns = [
  { fieldName: 'id', fieldKey: 'id', hideEdit:true },
  { fieldName: 'Student Name', fieldKey: 'studentName' },
  { fieldName: 'Class', fieldKey: 'studentClass' },
  { fieldName: 'Mobile No', fieldKey: 'mobileNo' },
  { fieldName: 'Email', fieldKey: 'email' },
  { fieldName: 'Guardian Name', fieldKey: 'guardianName' },
  { fieldName: 'Event', fieldKey: 'eventName' },
  { fieldName: 'Institute', fieldKey: 'instituteName', hideEdit:true },
];