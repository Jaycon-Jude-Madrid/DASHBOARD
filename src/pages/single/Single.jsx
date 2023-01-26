import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";

const Single = () => {
	return (
		<div className="singlePage">
			<Sidebar />
			<div className="singlePageContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="editButton">Edit</div>
						<h1 className="title">User Information</h1>
						<div className="item">
							<img
								src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="singleImage"
								className="itemImg"
							/>

							<div className="details">
								<h1 className="itemTitle">Jane Doe</h1>

								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">example.com</span>
								</div>

								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">+63 092323</span>
								</div>

								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">Barangay 29</span>
								</div>

								<div className="detailItem">
									<span className="itemKey">City:</span>
									<span className="itemValue">CDO</span>
								</div>
							</div>
						</div>
					</div>

					<div className="topRight">
						<Chart aspect={3 / 1} title="User Information" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">History</h1>
					<ListTable />
				</div>
			</div>
		</div>
	);
};

export default Single;
