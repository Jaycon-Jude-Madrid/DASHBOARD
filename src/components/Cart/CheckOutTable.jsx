import "./CheckOutTable.scss";
import React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductContext } from "../../Hooks/useProductContext";

export default function CheckOutTable() {
  const { cart, handleChange, handleRemove } = useProductContext();
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "productName", headerName: "Product Name", width: 200 },
    {
      field: "price",
      headerName: "Price ",
      width: 130,
      renderCell: (params) => {
        return <div>₱ {params.row.price}</div>;
      },
    },
    {
      field: "amount",
      headerName: "Quantity",
      width: 200,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="actions">
            <button onClick={() => handleChange(params.row, +1)}>+</button>
            <button onClick={() => handleChange(params.row, -1)}>-</button>
            <button onClick={() => handleRemove(params.row.id)}>
              <DeleteIcon className="icon" />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{ height: 400, width: "100%", marginTop: "20px" }}
      className="checkouttable"
    >
      <DataGrid
        rows={cart}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}
