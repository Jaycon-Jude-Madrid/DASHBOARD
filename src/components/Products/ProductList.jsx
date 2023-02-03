import * as React from "react";
import "./ProductList.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button } from "@mui/material";

import { useProductContext } from "../../Hooks/useProductContext";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function ProductList() {
  const { handleClick, filteredList } = useProductContext();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Picture</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredList.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">₱ {row.price}</TableCell>
              <TableCell align="right">
                <img src="" height="32px" width="32px" />
              </TableCell>
              <TableCell align="right">{`22`}</TableCell>
              <TableCell align="right">
                <Button
                  sx={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    border: "none",
                    background: "white",
                    fontWeight: "bold",

                    "&:hover": {
                      outline: "none",
                    },
                  }}
                  variant="outlined"
                  onClick={() => handleClick(row)}
                  startIcon={<ShoppingCartCheckoutIcon />}
                >
                  Add to cart
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
