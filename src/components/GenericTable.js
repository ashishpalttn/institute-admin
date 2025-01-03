import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import GenericCreateEditDialog from "../components/GenericCreateEditDialog";
import GenericButton from "./GenericButton";

const GenericTable = ({
  button,
  tableTitle,
  columns,
  rows,
  handleEditSubmit,
  onDelete,
}) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState([]);

  const enhancedColumns = [
    {
      field: "serialNo",
      headerName: "SN",
      sortable: false,
      minWidth: 80,
      flex: 0.2,
      renderCell: (params) => {
        const serialNumber = rows.indexOf(params.row) + 1;
        return <div>{serialNumber}</div>;
      },
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

  const onEdit = (row) => {
    setEditData(row);
    setEditDialogOpen(true);
    console.log("Edit row:", row);
  };

  return (
    <div className="w-full h-[calc(100vh-92px)] bg-gray-100">
      <div className="h-[calc(100vh-140px)] w-full">
        <div className="flex justify-center justify-between p-2 ">
          <h1 className="text-2xl font-bold ">{tableTitle}</h1>
          <GenericButton
            label={button?.label}
            onClick={() => setEditDialogOpen(true)}
          />
        </div>
        <DataGrid
          rows={rows}
          columns={enhancedColumns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          getRowId={(row) => row.id}
          className="bg-white"
          sx={{
            "& .MuiDataGrid-footerContainer": {
              position: "sticky",
              bottom: 0,
              backgroundColor: "#fff",
              zIndex: 1,
            },
            "& .MuiDataGrid-columnHeaders": {
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
              zIndex: 1,
            },
          }}
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
  );
};

export default GenericTable;
