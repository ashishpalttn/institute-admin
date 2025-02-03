import React, { useState } from "react";
import GenericTable2 from "./GenericTable2.js";
import GenericForm from "../GenericForm.js";

const GenericAdmissionWithTableComponent = ({
  formTitle,
  formFields,
  handleSave,
  handleDelete,
  handleEditSubmit,
  tableData,
}) => {
  return (
    <div className="p-2  h-full  block ">
      <GenericForm
        formTitle={formTitle}
        formFields={formFields}
        handleSave={handleSave}
      />
      <div className=" mt-2 h-[48%] overflow-auto  ">
        <GenericTable2
          columns={formFields}
          rows={tableData}
          handleEditSubmit={handleEditSubmit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default GenericAdmissionWithTableComponent;
