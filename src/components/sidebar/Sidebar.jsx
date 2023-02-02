import "./sidebar.scss";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Test Dashboard</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul className="listSidebar">
          <p className="title">SALES</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>Dashboard/Sales</span>
            </li>
          </Link>
          <p className="title">MAIN</p>
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <PeopleRoundedIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingCartIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/transactions" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongIcon className="icon" />
              <span>Transactions</span>
            </li>
          </Link>
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <li>
              <WarehouseIcon className="icon" />
              <span>Inventory</span>
            </li>
          </Link>
          <p className="title">STATISTICS</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <BarChartIcon className="icon" />
              <span>Statistics</span>
            </li>
          </Link>

          {/* <Link to="/products" style={{ textDecoration: "none" }}>
						<li>
							<CategoryRoundedIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>

					<li>
						<StorefrontRoundedIcon className="icon" />
						<span>Orders</span>
					</li>

					<li>
						<LocalShippingRoundedIcon className="icon" />
						<span>Delivery</span>
					</li>

					<p className="title">USEFUL</p>
					<li>
						<QueryStatsRoundedIcon className="icon" />
						<span>Stats</span>
					</li>

					<li>
						<CircleNotificationsRoundedIcon className="icon" />
						<span>Notifications</span>
					</li>

					<p className="title">SERVICE</p>
					<li>
						<SettingsSystemDaydreamRoundedIcon className="icon" />
						<span>System Health</span>
					</li>

					<li>
						<PsychologyRoundedIcon className="icon" />
						<span>Logs</span>
					</li>

					<li>
						<SettingsRoundedIcon className="icon" />
						<span>Settings</span>
					</li>

					<p className="title">USER</p>

					<li>
						<AccountCircleRoundedIcon className="icon" />
						<span>Profile</span>
					</li> */}
        </ul>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
