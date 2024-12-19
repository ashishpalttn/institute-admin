import React, { useEffect, useState } from "react";
import GenericAdmissionWithTableComponent from '../components/GenericAdmissionWithTableForm';
import { getStudents, selectStudent } from "../store/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../components/DropDown";
import TestPage from "./TestPage";



const StudentAdmissionPage = () => {
  const dispatch = useDispatch()
  const students = useSelector(selectStudent)



  useEffect(()=>{
      dispatch(getStudents());
  },[])

 

  const formFields = [
    { label: "Student Name", name: "studentName" },
    { label: "Father Name", name: "fatherName" },
    { label: "Mother Name", name: "motherName" },
    { label: "Address", name: "address" },
    { label: "Student's Mobile No.", name: "mobileNo", type: "tel" },
    { label: "Parent's Mobile No.", name: "parentMobileNo", type: "tel" },
    { label: "Email ID", name: "email", type: "email" },
    { label: "Class Name", name: "className" },
    { label: "Section", name: "section" },
    { label: "Admission Date.", name: "admissionDate",type:'date' },
  ];
  const formTitle = "Student form"
  const componentTitle = "Student Registration"
  const tableTitle = "Student List";
  const tableColumns = [
    { label: "Student Name", key: "studentName" },
    { label: "Father Name", key: "fatherName" },
    // { label: "Mother Name", key: "motherName" },
    // { label: "Address", key: "address" },
    { label: "Mobile No.", key: "mobileNo" },
    // { label: "Email ID", key: "email" },
    { label: "Class Name", key: "className" },
    // { label: "Section", key: "section" },
    // { label: "Roll No.", key: "rollNo" },
  ];

  const handleSaveClick = (formData) => {
    console.log (formData)
  }
  return (
    <div>
       <TestPage/>
     <GenericAdmissionWithTableComponent
       componentTitle={componentTitle}
       formTitle={formTitle}
       formFields={formFields}
       tableTitle={tableTitle}
      tableColumns={tableColumns}
       handleSaveClick = {handleSaveClick}
       tableData={students}
      
    /> 
    </div>

  );
};

export default StudentAdmissionPage;
