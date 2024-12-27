import React, { useState } from "react";
import GenericTable from "./GenericTable";
import GenericForm from "./GenericForm.js";

const GenericAdmissionWithTableComponent = ({
  formTitle,
  formFields,
  handleSave,
  handleDelete,
  tableData,
}) => {
  return (
    <div className="p-2  h-full  block ">
      <GenericForm
        formTitle={formTitle}
        formFields={formFields}
        handleSave={handleSave}
      />
      <div className=" mt-2 h-[48%]  ">
        <GenericTable
          columns={formFields}
          data={tableData}
          // onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default GenericAdmissionWithTableComponent;
