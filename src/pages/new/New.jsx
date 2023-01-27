import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadRounded } from "@mui/icons-material";
import { useState } from "react";
import { async } from "@firebase/util";
import { auth, db } from "../../firebase";
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	const [data, setData] = useState({});
	const navigate = useNavigate();

	//
	const handleInput = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		setData({ ...data, [id]: value });
	};

	console.log(data);

	// add a new user to the database when the form is submitted
	const handleAdd = async (e) => {
		e.preventDefault();

		// Add a new document in collection "cities"
		try {
			await addDoc(collection(db, "users"), {
				...data,
				timeStamp: serverTimestamp(),
			});

			navigate(-1); // go back to the previous page
		} catch (error) {
			console.log(error);
		}
	};

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
						{/* temporary removes an image  */}
						{/* <img
							src={
								file
									? URL.createObjectUrl(file)
									: "https://img.freepik.com/premium-vector/head-silhouette-vector-illustration_97886-14450.jpg?w=2000"
							}
							alt="user"
						/> */}
					</div>

					{/* temporary removes adding an image */}
					<div className="formInput">
						{/* <label htmlFor="file">
									Image: <DriveFolderUploadRounded className="icon" />
								</label> */}
						{/* the id="file" connects to the htmlFor="file"   */}
						{/* <input
									type="file"
									id="file"
									style={{ display: "none" }}
									placeholder="dagnay"
									onChange={(e) => setFile(e.target.files[0])}
								/> */}
					</div>
					<div className="right">
						<form onSubmit={handleAdd}>
							{inputs.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input
										type={input.type}
										placeholder={input.placeholder}
										onChange={handleInput}
										id={input.id}
									/>
								</div>
							))}

							<div className="buttonCenter">
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
