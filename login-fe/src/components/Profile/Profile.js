import React, { useState } from "react";

import "./profile.css";


async function saveProfile(profile) {
    return fetch('http://localhost:8080/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
    })
        .then(data => data.json());
};

export default function Profile() {

    const [lowercase, setLowercase] = useState();
    const [uppercase, setUppercase] = useState();
    const [digits, setDigits] = useState();
    const [symbols, setSymbols] = useState();
    const [excludedChars, setExcludedChars] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const resp = await saveProfile({
            lowercase,
            uppercase,
            digits,
            symbols,
            excludedChars
        });

    };

    return (
        <div className="form-wrapper">
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="checkbox" onChange={e => setLowercase(e.target.value)} />
                    <span> Include Lowercase</span>
                </label><br />
                <label>
                    <input type="checkbox" onChange={e => setUppercase(e.target.value)} />
                    <span> Include Uppercase</span>
                </label><br />
                <label>
                    <input type="checkbox" onChange={e => setDigits(e.target.value)} />
                    <span> Include Digits</span>
                </label><br />
                <label>
                    <input type="checkbox" onChange={e => setSymbols(e.target.value)} />
                    <span> Include Symbols (!@#$%^&*()_+-=[]{ }|,.&LT;&GT;/?\"';:)</span>
                </label><br />
                <label>
                    <span>Exclude Characters : </span>
                    <input type="text" onChange={e => setExcludedChars(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}