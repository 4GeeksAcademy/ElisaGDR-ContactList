import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const EditContact = (id) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params.id);

    // filter donde el id del array sea igual a params.id
    const result = store.users.filter((contact) => contact.id == params.id);
    const updatedContact = result[0];
    console.log(updatedContact);
    const [updatedUser, setUpdatedUser] = useState({
        email: updatedContact.email,
        full_name: updatedContact.full_name,
        phone: updatedContact.phone,
        address: updatedContact.address,
        agenda_slug: "ElisaGarcia"
    });
    /*const submitContact = (event) => {
        event.preventDefault();
        actions.putUsers(updatedContact);
    };*/
    const submitContact = async (event) => {
        event.preventDefault();
        await actions.putUsers(updatedContact.id, updatedUser);
        getActions().updateContactInStore(updatedContact.id, updatedUser);
    };
    const handleInput = (event) => {
        const { name, value } = event.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    return (
        <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://static.wikia.nocookie.net/doblaje/images/4/44/Freddy-freddy-krueger-33746737-500-614.jpg/revision/latest/thumbnail/width/360/height/450?cb=20140817034203&path-prefix=es" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{ width: "700px" }}>
                            <form onSubmit={submitContact}>
                                <h5 className="card-title">
                                    <input type="text"
                                        className="form-control"
                                        style={{ width: "50%" }}
                                        name="full_name"
                                        value={updatedUser.full_name}
                                        onChange={handleInput}
                                        placeholder={updatedUser.full_name}>
                                    </input>
                                    <input type="text"
                                        className="form-control"
                                        style={{ width: "50%" }}
                                        name="address"
                                        value={updatedUser.address}
                                        onChange={handleInput}
                                        placeholder={updatedUser.address}>
                                    </input>
                                    <input type="text"
                                        className="form-control"
                                        style={{ width: "50%" }}
                                        name="phone"
                                        value={updatedUser.phone}
                                        onChange={handleInput}
                                        placeholder={updatedUser.phone}>
                                    </input>
                                    <input type="text"
                                        className="form-control"
                                        style={{ width: "50%" }}
                                        name="email"
                                        value={updatedUser.email}
                                        onChange={handleInput}
                                        placeholder={updatedUser.email}>
                                    </input>
                                </h5>
                                <button type="submit" className="btn btn-outline-dark text-secondary m-3">Save</button>
                                <Link to="/Contact">
                                    <button type="button" className="btn btn-dark text-light">Get back to the contacts</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};