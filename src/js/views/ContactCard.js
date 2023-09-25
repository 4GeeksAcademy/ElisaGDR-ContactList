import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil , faTrash , faLocationDot , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../../styles/demo.css";

export const ContactCard = ({ name, address, phone, email, id }) => {
    const { store, actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteUsers(id);
        actions.getUsers();
    };

   /* const handlePut = () => {
        actions.putUsers();
    }*/

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/originals/5f/c8/af/5fc8afde9f20cfadfb97292605934028.jpg" className="card-img" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{ width: "700px" }}>
                            <h5 className="card-title"> {name}</h5>
                            <p className="card-text"> <FontAwesomeIcon icon={faLocationDot} />  {address}</p>
                            <p className="card-text"> <FontAwesomeIcon icon={faPhone} />  {phone}</p>
                            <p className="card-text"> <FontAwesomeIcon icon={faEnvelope} />  {email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="mr-5">
                <button type="button" className="btn" /*onClick={handlePut}*/>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button type="button" className="btn"  onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </span>
        </li>
    )
}