import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const AddContact = () => {

	const { store, actions } = useContext(Context);
	const [newContact, setNewContact] = useState({
		email: "",
		full_name: "",
		phone: "",
		address: "",
		agenda_slug: "ElisaGarcia"
	});

	const handleInput = (event) => {
		const { name, value } = event.target;
		//setNewContact({ ...newContact, [name]: value });
		setNewContact({ ...newContact, [name]: value });
	};

	const addNewContact =(event) => {
        event.preventDefault();
        //actions.setStore({ users: [...store.users, newContact] });
		actions.postUsers(newContact);
        setNewContact({
			email: "",
            full_name: "",
            phone: "",
            address: "",
            agenda_slug: "ElisaGarcia"
        });
    };

	return (
		<div className="text-center mt-5">
			<h1>Add a new contact</h1>
			<form onSubmit={addNewContact}>
				<ul className="list-unstyled">
					<li className="col-md-12 offset-md-3 m-3 text-center"><label>Email</label>
						<input type="text"
							name="email"
							value={newContact.email}
							onChange={handleInput}
							placeholder="Enter email"></input></li>
					<li className="col-md-12 offset-md-3 m-3 text-center"><label>Full Name</label>
						<input type="text"
							name="full_name"
							value={newContact.full_name}
							onChange={handleInput}
							placeholder="Full Name"></input></li>
					<li className="col-md-12 offset-md-3 m-3 text-center"><label>Phone</label>
						<input type="text"
							name="phone"
							value={newContact.phone}
							onChange={handleInput}
							placeholder="Enter phone"></input></li>
					<li className="col-md-12 offset-md-3 m-3 text-center"><label>Address</label>
						<input type="text"
							name="address"
							value={newContact.address}
							onChange={handleInput}
							placeholder="Enter address"></input></li>
					<li className="col-md-12 offset-md-3 m-3 text-center">
						<button type="submit" className="btn btn-outline-dark text-secondary m-3">Save</button></li>
					<li>
						<Link to="/Contact">
							<button type="button" className="btn btn-dark text-light">Get back to the contacts</button>
						</Link>
					</li>
				</ul>
			</form>

		</div>
	);
};