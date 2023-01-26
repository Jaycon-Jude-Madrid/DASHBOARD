import "./home.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";

const Home = () => {
	return (
		<div className="home">
			<Sidebar />

			<div className="homeContainer">
				<Navbar />

				<div className="widgets">
					<Widgets type="user" />
					<Widgets type="order" />
					<Widgets type="earning" />
					<Widgets type="balance" />
				</div>

				<div className="charts">
					<Featured />
					<Chart aspect={2 / 1} title="All in All" />
				</div>

				<div className="listContainer">
					<div className="listTitle">Latest Transactions</div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
