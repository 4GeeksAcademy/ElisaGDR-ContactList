import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard.js";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [contactList, setContactList] = useState([]);

	useEffect(() => {
        // Actualiza la lista de contactos cada vez que cambia el estado de store.users
        setContactList(store.users);
    }, [store.users]);

	return (
		<div className="container">
			<ul className="list-group">
	  	
		{/*revisar el envío de index  */}
			 {contactList.map((item) => 
			 
                    <ContactCard  
					key={item.id} 
					name={item.full_name}
					address={item.address}
					phone={item.phone}
					email={item.email}
					id={item.id}/> 
                )}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-dark text-light">Add a new contact</button>
			</Link>
		</div>
	);
};