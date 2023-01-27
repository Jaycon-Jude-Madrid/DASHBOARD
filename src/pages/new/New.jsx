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

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	const [data, setData] = useState({});

	const handleInput = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		setData({ ...data, [id]: value });
	};

	console.log(data);

	const handleAdd = async (e) => {
		e.preventDefault();

		// Add a new document in collection "cities"
		try {
			await addDoc(collection(db, "users"), {
				...data,
				timeStamp: serverTimestamp(),
			});
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
						<form onSubmit={handleAdd}>
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
									<input
										type={input.type}
										placeholder={input.placeholder}
										onChange={handleInput}
										id={input.id}
									/>
								</div>
							))}

							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
