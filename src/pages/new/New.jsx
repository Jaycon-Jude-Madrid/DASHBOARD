import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadRounded } from "@mui/icons-material";

const New = ({ inputs, title }) => {
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
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
							alt="ImageNo"
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
