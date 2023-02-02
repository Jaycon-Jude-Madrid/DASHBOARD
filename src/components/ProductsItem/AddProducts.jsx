import React from "react";
import { AddProductModal } from "./AddProductModal";
import "./AddProducts.scss";
import ProductsTable from "./ProductsTable";
export const AddProducts = () => {
  return (
    <div className="addProducts">
      <div className="top">
        <p className="title">Products</p>
        <AddProductModal />
      </div>
      <div className="center">
        <div className="table">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};
