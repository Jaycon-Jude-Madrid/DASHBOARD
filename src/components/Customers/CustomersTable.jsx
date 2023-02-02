import React, { useState } from "react";
import "./CustomersTable";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditCustomer } from "./EditCustomer";
import { useCustomerContext } from "../../Hooks/useCustomerContext";
import { useDelete } from "../../Hooks/useDelete";

export default function CustomersTable() {
  const { customers } = useCustomerContext();
  const { deleteCustomer } = useDelete();

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
        return (
          <div className="actions">
            <Button
              sx={{
                cursor: "pointer",
                borderRadius: "5px",
                background: "#59d983 ",
                border: "none",
                color: "white",

                textTransform: "capitalize",
              }}
            >
              <EditCustomer
                name={params.row.Name}
                location={params.row.Location}
                contact={params.row.Contact}
                ID={params.id}
              />
            </Button>
            <Button
              style={{ color: "red" }}
              onClick={() => deleteCustomer(params.id)}
            >
              <DeleteIcon />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 700, width: "100%" }}>
      {customers && (
        <DataGrid
          rows={customers}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      )}
    </Box>
  );
}
