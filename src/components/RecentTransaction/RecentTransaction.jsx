import { Link } from "react-router-dom";
import { useTransactionsContext } from "../../Hooks/useTransactionsContext";
import "./RecentTransaction.scss";
import { RecentTransactionModal } from "./RecentTransactionModal";
const Featured = () => {
  const { recentTransactions, setID } = useTransactionsContext();
  const getId = (id) => {
    setID(id);
  };

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Recent Transaction History</h1>

        <h2 className="view">
          {" "}
          <Link to="/transactions">View All Transaction</Link>
        </h2>
      </div>
      <div className="bottom">
        {recentTransactions?.map((item, index) => {
          const secs = item.Timestamp.seconds;
          const output = new Date(secs * 1000);
          const date = output.toString();

          return (
            <div className="recent_transaction" key={index}>
              <p>{item.customer}</p>
              <p>{date.slice(0, 15)}</p>
              <button onClick={() => getId(item.id)}>
                <RecentTransactionModal />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
