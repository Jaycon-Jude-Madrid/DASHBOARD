import * as React from "react";
import Box from "@mui/material/Box";
import "./CustomerAddModal.scss";
import Modal from "@mui/material/Modal";

import { useAdd } from "../../Hooks/useAdd";

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

export const CustomerAddModal = ({ id }) => {
  const initialValue = {
    name: "",
    contact: "",
    location: "",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { addCustomer } = useAdd();

  const [inputs, setInputs] = React.useState(initialValue);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <button onClick={handleOpen}> Add New Customer </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="top">
            <p className="title">Add New Customers</p>
          </div>
          <div className="bottom">
            <div className="inputs_container">
              <input
                type="text"
                placeholder="Enter Fullname"
                name="name"
                onChange={handleChange}
                value={inputs.name}
              />
              <input
                type="text"
                maxLength="11"
                placeholder="Enter Contact"
                name="contact"
                value={inputs.contact}
                onChange={handleChange}
              />
              <textarea
                type="text"
                placeholder="Enter Location"
                name="location"
                value={inputs.location}
                onChange={handleChange}
              />
            </div>
            <div className="button">
              <button
                onClick={() => addCustomer(inputs, setInputs, initialValue)}
              >
                Add Customer
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
