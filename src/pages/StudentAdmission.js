import React, { useEffect} from "react";
import GenericAdmissionWithTableComponent from '../components/genericFormWithTable/GenericAdmissionWithTableForm';
import { getStudents,editStudent ,saveStudent, deleteStudent, selectStudent } from "../store/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import GenericTable from "../components/GenericTable";

const StudentAdmissionPage = () => {
  const dispatch = useDispatch()
  const students = useSelector(selectStudent)

  useEffect(()=>{
      dispatch(getStudents());
  },[])

  const handleSave = async (formData) => {
    await dispatch(saveStudent(formData))
    dispatch(getStudents());
  }
  const handleDelete = async (id) =>{
    await dispatch(deleteStudent(id));
    dispatch(getStudents())
  }
const handleEditSubmit = async (student)=>{
  await dispatch(editStudent(student))
  dispatch(getStudents())
}
  return (
    <div className="bg-blue-100 h-full">
     {/* <GenericAdmissionWithTableComponent
       formTitle={formTitle}
       formFields={formFields}
       tableData={students}
       handleSave = {handleSave}
       handleDelete= {handleDelete}
       handleEditSubmit={handleEditSubmit} 
    />  */}
  
     <GenericTable
           tableTitle={formTitle}
            columns={formFields}
            rows={students}
            handleSave = {handleSave}
            onDelete= {handleDelete}
            handleEditSubmit={handleEditSubmit} 
            button={{
             label:"Create Student"
            }}
     />
    </div>
 
  );
};

export default StudentAdmissionPage;


const formTitle = "Students"
const formFields = [
  { fieldName: "Roll No.", fieldKey: "id", width:10,},
  { fieldName: "Student Name", fieldKey: "studentName", width:20},
  { fieldName: "Father Name", fieldKey: "fatherName" },
  { fieldName: "Mother Name", fieldKey: "motherName" },
  { fieldName: "Address", fieldKey: "address" },
  { fieldName: "Student's Mobile No.", fieldKey: "mobileNo", type: "tel" },
  { fieldName: "Parent's Mobile No.", fieldKey: "parentMobileNo", type: "tel" },
  { fieldName: "Email ID", fieldKey: "email", type: "email" },
  { fieldName: "Class Name", fieldKey: "className" },
  { fieldName: "Section", fieldKey: "section" },
  { fieldName: "Admission Date.", fieldKey: "admissionDate",type:'date' },
];
