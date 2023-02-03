import React, { useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function ProductsTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 190 },
    {
      field: "Name",
      headerName: "Product Name",
      width: 200,
      editable: true,
    },
    {
      field: "ImageUrl",
      headerName: "Product Image",
      width: 200,
      editable: true,
    },
    {
      field: "Price",
      headerName: "Price",
      width: 150,
      editable: true,
    },
    {
      field: "Category",
      headerName: "Category",
      width: 200,
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
