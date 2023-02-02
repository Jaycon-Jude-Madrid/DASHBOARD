import * as React from "react";

import Box from "@mui/material/Box";
import "./EditCustomer.scss";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { useGetData } from "../../Hooks/useGetData";
import { useEffect } from "react";
import { useCustomerContext } from "../../Hooks/useCustomerContext";
import { useState } from "react";
import { useUpdate } from "../../Hooks/useUpdate";
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

export const EditCustomer = ({ name, location, contact, ID }) => {
  const initialValue = {
    name: name,
    contact: contact,
    location: location,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = React.useState(initialValue);

  const { updateCustomers } = useUpdate();
  const handleChange = (e) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      [e.target.name]: value,
    });
  };
  const data = {
    name: inputs.name,
    contact: inputs.contact,
    location: inputs.location,
  };
  return (
    <div className="editModal">
      <p onClick={handleOpen} style={{ fontSize: "12px" }}>
        Edit{" "}
      </p>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="editModalContainer">
            <div className="top">
              <p className="title">Edit Customer</p>
            </div>
            <div className="center">
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
                  onChange={handleChange}
                  value={inputs.contact}
                />
                <textarea
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  onChange={handleChange}
                  value={inputs.location}
                />
              </div>
              <div className="button">
                <button onClick={() => updateCustomers(ID, data)}>
                  Update Customer
                </button>
              </div>
            </div>

            <div className="bottom"></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
