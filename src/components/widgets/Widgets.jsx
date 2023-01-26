import "./widget.scss";

import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import {
	AccountBalanceRounded,
	MonetizationOnRounded,
	Person2Outlined,
	ShoppingCartRounded,
} from "@mui/icons-material";

const Widgets = ({ type }) => {
	// we used type as a prop to determine which widget to render
	let data;

	// temporary data
	const amount = 200;
	const diff = 10;

	switch (type) {
		case "user":
			data = {
				title: "USER",
				isMoney: false,
				link: "see all users",
				icon: <Person2Outlined className="icon" />,
			};
			break;

		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all orders",
				icon: <ShoppingCartRounded className="icon" />,
			};
			break;

		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View all earnings",
				icon: <MonetizationOnRounded className="icon" />,
			};
			break;

		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				icon: <AccountBalanceRounded className="icon" />,
			};
			break;
	}

	return (
		<div className="widget">
			<div className="widgetLeft">
				<span className="widgetTitle">{data.title}</span>
				<span className="widgetCounter">
					{data.isMoney && "$"} {amount}
				</span>
				<span className="widgetLink">{data.link}</span>
			</div>

			<div className="widgetRight">
				<ArrowCircleUpRoundedIcon />
				<div className="widgetPercentage positive">{diff} %</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widgets;
