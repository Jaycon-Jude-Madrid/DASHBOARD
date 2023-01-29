import { MoreVertRounded } from "@mui/icons-material";
import "./RecentTransaction.scss";
import { RecentTransactionModal } from "./RecentTransactionModal";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Recent Transaction History</h1>

        <MoreVertRounded fontSize="small" />
      </div>

      <div className="bottom">
        <h2 className="view">View All Transaction</h2>
        <div className="recent_transaction">
          <p>Jaycon Jude C. Madrid</p>
          <p>12/20/2022</p>

          <RecentTransactionModal id="1" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
