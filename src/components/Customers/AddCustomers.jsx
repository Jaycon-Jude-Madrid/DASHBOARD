import React from "react";
import "./AddCustomers.scss";
import { CustomerAddModal } from "./CustomerAddModal";
import CustomersTable from "./CustomersTable";
export const AddCustomers = () => {
  return (
    <div className="addCustomers">
      <div className="top">
        <p className="title">Customers</p>

        <CustomerAddModal />
      </div>
      <div className="center">
        <div className="table">
          <CustomersTable />
        </div>
      </div>
    </div>
  );
};
