import React, {useState} from "react";

import "./main.css";

async function generatePassword(profile) {
    return fetch('http://localhost:9090/genpass/manager/gen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
    })
        .then(data => data.json());
}

export default function Main() {
    const [name, setName] = useState();
    const [domain, setDomain] = useState();
    const [email, setEmail] = useState();
    const [lowerCase, setLowerCase] = useState();
    const [upperCase, setUpperCase] = useState();
    const [digits, setDigits] = useState();
    const [symbols, setSymbols] = useState();
    const [exclude, setExclude] = useState();
    const [revision, setRevision] = useState();
    const [length, setLength] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const pwd = await generatePassword({
            name,
            domain,
            email,
            lowerCase,
            upperCase,
            digits,
            symbols,
            exclude,
            revision,
            length
        });
        console.log(pwd);
    };


    return (
        <div className="form-wrapper">
            <h2>Main</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Enter Name" onChange={e => setName(e.target.value)}/>
                </label><br/>
                <label>
                    <input type="text" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
                </label><br/>
                <label>
                    <input type="text" placeholder="Enter domain" onChange={e => setDomain(e.target.value)}/>
                </label><br/>
                <label>
                    <input type="checkbox" onChange={e => setLowerCase(e.target.checked)}/>
                    <span> Include Lowercase</span>
                </label><br/>
                <label>
                    <input type="checkbox" onChange={e => setUpperCase(e.target.checked)}/>
                    <span> Include Uppercase</span>
                </label><br/>
                <label>
                    <input type="checkbox" onChange={e => setDigits(e.target.checked)}/>
                    <span> Include Digits</span>
                </label><br/>
                <label>
                    <input type="checkbox" onChange={e => setSymbols(e.target.checked)}/>
                    <span> Include Symbols (!@#$%^&*()_+-=[]{}|,.&LT;&GT;/?\"';:)</span>
                </label><br/>
                <label>
                    <span>Revision : </span>
                    <input type="text" onChange={e => setRevision(e.target.value)}/>
                </label><br/>
                <label>
                    <span>Password Length : </span>
                    <input type="text" onChange={e => setLength(e.target.value)}/>
                </label><br/>
                <label>
                    <span>Exclude Characters : </span>
                    <input type="text" onChange={e => setExclude(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Generate</button>
                </div>
                <label>
                    <input type="text" placeholder="Generated password"/>
                    <button>Copy</button>
                </label>
            </form>
        </div>
    );
}