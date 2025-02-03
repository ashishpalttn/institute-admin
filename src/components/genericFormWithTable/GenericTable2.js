import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import GenericCreateEditDialog from "../GenericCreateEditDialog";

const GenericTable2 = ({ columns, rows, handleEditSubmit, onDelete }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false); 
  const [editData, setEditData] = useState([])

  const enhancedColumns = [
    {
      field: "serialNo",
      headerName: "SN",
      sortable: false,
      minWidth: 80,
      flex: 0.2, // Adjust as needed to balance space
      renderCell: (params) => {
        const serialNumber = rows.indexOf(params.row)+1
        return <div>{serialNumber}</div> 
      }
      ,
    },
    ...columns.map((col) => ({
      field: col.fieldKey,
      headerName: col.fieldName,
      flex: 1,
      sortable: true,
      minWidth: 150,
    })),
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      minWidth: 120,
      flex: 0.5,
      renderCell: (params) => (
        <div className="flex space-x-2">
          <IconButton
            className="text-blue-500 hover:text-blue-700"
            onClick={() => onEdit(params.row)}
          >
            <Edit />
          </IconButton>
          <IconButton
            className="text-red-500 hover:text-red-700"
            onClick={() => onDelete(params.row.id)}
          >
            <Delete />
          </IconButton>
        </div>
      ),
    },
  ];

  const onEdit = (student) => {
    setEditData(student);  // Set selected student for editing
    setEditDialogOpen(true);      // Open dialog
  console.log('Edit student:', student);
};

  return (
    // <div>
    <div className="w-full h-full max-h-[80vh] overflow-auto">
      <div className="w-full h-full max-h-[80vh] overflow-x-auto">
        <DataGrid
          rows={rows}
          columns={enhancedColumns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          getRowId={(row) => row.id} // Use a unique identifier from your rows
          className="bg-white"
          // onRowDoubleClick={}
        />
        <GenericCreateEditDialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        columns={columns}
        row={editData}
        onSubmit={handleEditSubmit}
      />
      </div>
    </div>
    // </div>
  );
};

export default GenericTable2;
