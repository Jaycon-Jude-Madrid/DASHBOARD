import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadRounded } from "@mui/icons-material";
import { useState } from "react";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");

	return (
		<div className="new">
			<Sidebar />

			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1 className="title">{title}</h1>
				</div>

				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectUrl(file)
									: "https://img.freepik.com/premium-vector/head-silhouette-vector-illustration_97886-14450.jpg?w=2000"
							}
							alt="user"
						/>
					</div>
					<div className="right">
						<form>
							<div className="formInput">
								<label htmlFor="file">
									Image: <DriveFolderUploadRounded className="icon" />
								</label>
								{/* the id="file" connects to the htmlFor="file"   */}
								<input
									type="file"
									id="file"
									style={{ display: "none" }}
									placeholder="dagnay"
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</div>

							{inputs.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input type={input.type} placeholder={input.placeholder} />
								</div>
							))}

							<button>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
