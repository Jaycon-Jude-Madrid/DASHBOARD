import React from "react";
import "./TotalTable.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useProductContext } from "../../Hooks/useProductContext";
import { useAddTransactions } from "../../Hooks/useAddTransactions";

const TotalTable = () => {
  const { price, cart } = useProductContext();
  const { addRecentTransactions } = useAddTransactions();

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
        <button onClick={() => addRecentTransactions(cart)}>
          Check Out <ShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};

export default TotalTable;
