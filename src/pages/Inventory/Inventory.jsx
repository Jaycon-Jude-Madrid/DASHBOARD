import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Inventory.scss";
export const Inventory = () => {
  return (
    <div className="Inventory">
      <Sidebar />
      <div className="inventoryContainer">
        <Navbar />
        Inventory
      </div>
    </div>
  );
};
