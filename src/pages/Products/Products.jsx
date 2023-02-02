import React from "react";
import "./Products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { AddProducts } from "../../components/ProductsItem/AddProducts";
export const Products = () => {
  return (
    <div className="Products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <AddProducts />
      </div>
    </div>
  );
};
