import React, { useEffect} from "react";
import GenericAdmissionWithTableComponent from '../components/GenericAdmissionWithTableForm';
import { getStudents, saveStudent, deleteStudent, selectStudent } from "../store/studentSlice";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div className="bg-blue-100 h-[100%]">
     <GenericAdmissionWithTableComponent
       formTitle={formTitle}
       formFields={formFields}
       tableData={students}
       handleSave = {handleSave}
       handleDelete= {handleDelete}
    /> 
    </div>

  );
};

export default StudentAdmissionPage;


const formTitle = "Student Registration"
const formFields = [
  { fieldName: "Student Name", fieldKey: "studentName" },
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
