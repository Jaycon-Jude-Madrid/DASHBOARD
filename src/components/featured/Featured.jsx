import { MoreVertRounded } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./featured.scss";

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertRounded fontSize="small" />
			</div>

			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={"90%"} strokeWidth={5} />
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">$420</p>
				<p className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
					ratione.
				</p>
			</div>
		</div>
	);
};

export default Featured;
