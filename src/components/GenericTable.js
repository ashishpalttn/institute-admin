import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const GenericTable = ({ columns, data, onEdit, onDelete }) => {
  const enhancedColumns = [
    {
      field: "serialNo",
      headerName: "SN",
      sortable: false,
      minWidth: 80,
      flex: 0.2, // Adjust as needed to balance space
      renderCell: (params) => {
        const serialNumber = data.indexOf(params.row)+1
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

  return (
    <div className="w-full h-full max-h-[80vh] overflow-auto">
      <div className="w-full h-full max-h-[80vh] overflow-x-auto">
        <DataGrid
          rows={data}
          columns={enhancedColumns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          getRowId={(row) => row.id} // Use a unique identifier from your data
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default GenericTable;
