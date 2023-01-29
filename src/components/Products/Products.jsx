import React, { useState } from "react";
import ProductList from "./ProductList";
import "./Products.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useProductContext } from "../../Hooks/useProductContext";
const Products = () => {
  const { filterBySearch } = useProductContext();
  return (
    <div className="products">
      <p className="title">Products</p>
      <div className="productsContainer">
        <div className="inputs">
          <div className="inputContainer">
            <input
              type="text"
              className=""
              placeholder="Search Product..."
              onChange={filterBySearch}
            />
            <SearchIcon className="icons" />
          </div>
        </div>
        <div className="tables">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
