import React from 'react';
import image from '../images/user.png';



function Card(props) {

    const { name, username, email } = props;


    return (
        <div className="card">
            <img src={image} alt="user" />
            <h4>{name}</h4>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}

export default Card