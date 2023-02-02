import React from "react";
import "./TotalTable.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useProductContext } from "../../Hooks/useProductContext";
import { useAdd } from "../../Hooks/useAdd";
import { useCustomerContext } from "../../Hooks/useCustomerContext";

const TotalTable = () => {
  const { price, cart } = useProductContext();
  const { customer } = useCustomerContext();
  const { addRecentTransactions } = useAdd();

  return (
    <div className="totalTable">
      <div className="total">
        <p>Subtotal</p>
        <p>₱ {price}</p>
      </div>
      <hr />
      <div className="total">
        <p>Discount</p>
        <input type="number" min="0" placeholder="Enter Discount..." />
      </div>
      <hr />
      <div className="total overAll">
        <p>Total Payment</p>
        <p>₱ {price}</p>
      </div>
      <div className="button_checkout">
        <button onClick={() => addRecentTransactions(cart, price, customer)}>
          Check Out <ShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};

export default TotalTable;
