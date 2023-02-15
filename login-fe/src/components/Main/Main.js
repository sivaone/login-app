import React, { useState } from "react";

import "./main.css";

async function generatePassword(profile) {
    return fetch('http://localhost:8080/generate-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
    })
        .then(data => data.json());
};

export default function Main() {

    const [domain, setDomain] = useState();
    const [lowercase, setLowercase] = useState();
    const [uppercase, setUppercase] = useState();
    const [digits, setDigits] = useState();
    const [symbols, setSymbols] = useState();
    const [excludedChars, setExcludedChars] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const pwd = await generatePassword({
            domain,
            lowercase,
            uppercase,
            digits,
            symbols,
            excludedChars
        });

    };


    return (
        <div className="form-wrapper">
            <h2>Main</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Enter domain" onChange={e => setDomain(e.target.value)} />
                </label><br />
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
                    <button type="submit">Generate</button>
                </div>
                <label>
                    <input type="text" placeholder="Generated password" />
                    <button>Copy</button>
                </label>
            </form>
        </div>
    );
}