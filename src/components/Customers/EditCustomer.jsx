import * as React from "react";
import Box from "@mui/material/Box";
import "./EditCustomer.scss";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export const EditCustomer = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Edit </button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}></Box>
      </Modal>
    </div>
  );
};
