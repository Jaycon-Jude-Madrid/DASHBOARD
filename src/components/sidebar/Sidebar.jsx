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

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">TestDashboard</span>
			</div>

			<hr />

			<div className="center">
				<ul className="listSidebar">
					<p className="title">MAIN</p>
					<li>
						<DashboardRoundedIcon className="icon" />
						<span>Dashboard</span>
					</li>

					<li>
						<PeopleRoundedIcon className="icon" />
						<span>Users</span>
					</li>

					<li>
						<CategoryRoundedIcon className="icon" />
						<span>Products</span>
					</li>

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
					</li>

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
