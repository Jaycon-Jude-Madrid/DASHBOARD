import React, { useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductsTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 190 },
    {
      field: "Name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "Location",
      headerName: "Location",
      width: 350,
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
      renderCell: (params) => {
        return <div className="actions"></div>;
      },
    },
  ];
  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={""}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
