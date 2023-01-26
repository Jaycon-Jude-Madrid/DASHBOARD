import "./navbar.scss";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbarWrapper">
				<div className="search">
					<input type="text" placeholder="Search" />
					<SearchRoundedIcon />
				</div>

				<div className="items">
					<div className="item">
						<PublicRoundedIcon className="icon" />
						English
					</div>

					<div className="item">
						<Brightness4RoundedIcon className="icon" />
					</div>

					<div className="item">
						<CircleNotificationsRoundedIcon className="icon" />
						<div className="counter">1</div>
					</div>

					<div className="item">
						<ChatRoundedIcon />
						<div className="counter">2</div>
					</div>

					<div className="item">
						<FormatListBulletedRoundedIcon className="icon" />
					</div>

					<div className="item">
						<img
							src="https://images.pexels.com/photos/14922901/pexels-photo-14922901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
							alt="avatar"
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
