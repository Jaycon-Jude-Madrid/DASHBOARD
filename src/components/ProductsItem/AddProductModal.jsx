import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useProductContext } from "../../Hooks/useProductContext";
import { useAdd } from "../../Hooks/useAdd";
import { Value } from "sass";

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

export const AddProductModal = () => {
  const [open, setOpen] = React.useState(false);
  const [imageUpload, setImageUpload] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { uploadFiles, addProduct } = useAdd();
  const { progress } = useProductContext();

  const productCategory = ["Tuna", "Pork", "Beef", "Chicken"];

  const handleSubmit = () => {
    const data = {};
    uploadFiles(imageUpload);
    setImageUpload(null);
  };
  console.log(imageUpload);
  return (
    <div>
      <button onClick={handleOpen}> Add New Products </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <input type="text" />
            <input type="text" />
            <select>
              {productCategory.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <input type="text" />

            <input
              type="file"
              value={imageUpload}
              onChange={(e) => setImageUpload(e.target.files[0])}
            />
            <button type="upload" onClick={handleSubmit}>
              {" "}
              add data{" "}
            </button>

            {progress === 100 ? (
              <p>Image uploaded </p>
            ) : (
              <>{progress ? <p> Uploading % {progress} </p> : null}</>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
