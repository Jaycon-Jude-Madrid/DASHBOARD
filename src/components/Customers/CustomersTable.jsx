import React from "react";
import "./CustomersTable";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { EditCustomer } from "./EditCustomer";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Fullname",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Location",
    width: 250,
    editable: true,
  },
  {
    field: "Contact",
    headerName: "Contact",
    width: 250,
    editable: true,
  },

  {
    field: "date",
    headerName: "Actions",
    width: 250,
    renderCell: (params) => (
      <div>
        <Button>
          <EditCustomer />
        </Button>
        <Button>Delete</Button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", Contact: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", Contact: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", Contact: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", Contact: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", Contact: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", Contact: null, age: 150 },
  { id: 7, lastName: "Clifford", Contact: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", Contact: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", Contact: "Harvey", age: 65 },
];

export default function CustomersTable() {
  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
