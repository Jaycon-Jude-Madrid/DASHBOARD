import "./sidebar.scss";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import SettingsSystemDaydreamRoundedIcon from "@mui/icons-material/SettingsSystemDaydreamRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

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
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>Dashboard/Sales</span>
            </li>
          </Link>

          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <PeopleRoundedIcon className="icon" />
              <span>Customers</span>
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

          <li>
            <ExitToAppRoundedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>

        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
