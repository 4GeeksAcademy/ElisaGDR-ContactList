import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil , faTrash , faLocationDot , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const ContactCard = ({ name, address, phone, email, id }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
 

    const handleDelete = (uid) => {
        console.log(uid);
        actions.deleteUsers(uid);
    };
    
  /* const handlePut = () => {
        actions.putUsers(updatedUser);
    }*/

    return (
        <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://static.wikia.nocookie.net/doblaje/images/4/44/Freddy-freddy-krueger-33746737-500-614.jpg/revision/latest/thumbnail/width/360/height/450?cb=20140817034203&path-prefix=es" className="card-img" alt="..."/>
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
                <Link to={`/edit-contact/${id}`}>
                <button type="button" className="btn" >
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                </Link>
                <button type="button" className="btn" onClick={() => handleDelete(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </span>
        </li>
    );
};