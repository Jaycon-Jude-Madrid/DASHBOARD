import "./table.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListTable = () => {
	const rows = [
		{
			id: 1234567,
			product: "Apple Airpods",
			img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			customer: "John Doe",
			amount: 785,
			date: "1 March",
			method: "Cash on Delivery",
			status: "Approved",
		},

		{
			id: 1334567,
			product: "Apple Airpods",
			img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			customer: "John Doe",
			amount: 800,
			date: "1 March",
			method: "Cash on Delivery",
			status: "Pending",
		},

		{
			id: 1434567,
			product: "Apple Airpods",
			img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			customer: "John Doe",
			amount: 785,
			date: "1 March",
			method: "Cash on Delivery",
			status: "Pending",
		},
	];

	return (
		<TableContainer component={Paper} className="table">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="tableCell">Tracking ID</TableCell>
						<TableCell className="tableCell">Product</TableCell>
						<TableCell className="tableCell">Customer</TableCell>
						<TableCell className="tableCell">Data</TableCell>
						<TableCell className="tableCell">Amount</TableCell>
						<TableCell className="tableCell">Payment Method</TableCell>
						<TableCell className="tableCell">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell className="tableCell">{row.id}</TableCell>
							<TableCell className="tableCell">
								<div className="cellWrapper">
									<img src={row.img} alt="" className="image" />
									{row.product}
								</div>
							</TableCell>
							<TableCell className="tableCell">{row.customer}</TableCell>
							<TableCell className="tableCell">{row.date}</TableCell>
							<TableCell className="tableCell">{row.amount}</TableCell>
							<TableCell className="tableCell">{row.method}</TableCell>
							<TableCell className="tableCell">
								<span className={`status ${row.status}`}>{row.status}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ListTable;
