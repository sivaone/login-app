import React, { useState } from "react";
import PropTypes from 'prop-types';

import "./login.css"

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json());
};

export default function Login({ setToken }) {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            email
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1>Authenticate</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}