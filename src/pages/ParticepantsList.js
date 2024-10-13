import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from '../components/GenericTable';
import { useLocation } from 'react-router-dom';
import { ExportStudents } from '../components/ExportStudents';
import CreateEditDialog from '../components/CreateEditDialog';

const BASE_URL = `${process.env.REACT_APP_API_URL}/event-registration`

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editDialogOpen, setEditDialogOpen] = useState(false);  // State to handle dialog visibility
  const [selectedStudent, setSelectedStudent] = useState(null); 
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
    { header: 'id', field: 'id', hideEdit:true },
    { header: 'SN.', field: 'sn', hideEdit:true },
    { header: 'Student Name', field: 'studentName' },
    { header: 'Class', field: 'studentClass' },
    { header: 'Mobile No', field: 'mobileNo' },
    { header: 'Email', field: 'email' },
    { header: 'Guardian Name', field: 'guardianName' },
    { header: 'Event', field: 'eventName' },
    { header: 'Institute', field: 'instituteName', hideEdit:true },
  ];

  const handleEdit = (student) => {
      setSelectedStudent(student);  // Set selected student for editing
      setEditDialogOpen(true);      // Open dialog
    console.log('Edit student:', student);
  };

  const handleSubmit = async (updatedData) => {
    try {
      // Send updated data to the server (implement PUT API here)
      await axios.put(`${BASE_URL}/registrations/${updatedData.id}`, updatedData);
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

  return (
    <div className="container  mx-auto px-4 py-6">
      <div className='flex justify-between'>
      <h1 className="text-2xl font-bold mb-4 ">Registered Students</h1>
      {/* <p>Export</p> */}
      <ExportStudents className="" eventName={eventName}/>
      </div>
      <GenericTable 
        columns={columns} 
        data={students} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        />
        <CreateEditDialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        columns={columns}
        data={selectedStudent}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default StudentsList;
