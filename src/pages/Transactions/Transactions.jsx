import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Transactions.scss";
export const Transactions = () => {
  return (
    <div className="Transactions">
      <Sidebar />
      <div className="transactionsContainer">
        <Navbar />
        hi
      </div>
    </div>
  );
};
