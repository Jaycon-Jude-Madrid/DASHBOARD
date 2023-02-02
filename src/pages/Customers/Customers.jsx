import React from "react";
import { AddCustomers } from "../../components/Customers/AddCustomers";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Customers.scss";
const Customers = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="customersContainer">
        <Navbar />
        <AddCustomers />
      </div>
    </div>
  );
};

export default Customers;
