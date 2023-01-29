import * as React from "react";
import "./Cart.scss";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckOutTable from "./CheckOutTable";
import TotalTable from "./TotalTable";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "auto",
  bgcolor: "white",
  p: "5px",
};

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ShoppingCartIcon
        onClick={handleOpen}
        sx={{
          fontSize: "26px",
          cursor: "pointer",
          "&:hover": {
            color: "#1976d2",
          },
        }}
      />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="cartModal">
            <div className="top">
              <p className="title">Checkout</p>
              <p className="selectLabel">Add Customer</p>
              <select>
                <option> Walk-In-Customer </option>
                <option> Rosalie</option>
                <option> Jessa Mae </option>
                <option> Jaycon Jude</option>
                <option>Clint</option>
              </select>
            </div>
            <div className="center">
              <CheckOutTable />
            </div>
            <div className="bottom">
              <div className="checkout_print">
                <TotalTable />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
