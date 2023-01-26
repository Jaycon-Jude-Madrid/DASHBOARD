import "./chart.scss";

import {
	AreaChart,
	// LineChart,
	// Line,
	Area,
	XAxis,
	// YAxis,
	CartesianGrid,
	Tooltip,
	// Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "January",
		Total: 1200,
	},
	{
		name: "February",
		Total: 2100,
	},
	{
		name: "March",
		Total: 800,
	},
	{
		name: "April",
		Total: 1000,
	},
	{
		name: "May",
		Total: 900,
	},
];

// the prop aspect is used to set the height of the chart
const Chart = ({ aspect, title }) => {
	return (
		<div className="chart">
			<div className="title">{title}</div>
			{/* aspect: if the width is 100% the height will be twice of it */}
			<ResponsiveContainer width="100%" aspect={aspect}>
				<AreaChart width={730} height={250} data={data}>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					{/* <YAxis /> */}
					<CartesianGrid strokeDasharray="3 3" className="chartGrid" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#total)"
					/>
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#82ca9d"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
