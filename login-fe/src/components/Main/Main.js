import React from "react";

import "./main.css"

export default function Main() {
    return (
        <div className="form-wrapper">
            <h2>Main</h2>
            <form>
                <label>
                    <input type="text" placeholder="Enter domain"/>
                </label><br/>
                <label>
                    <input type="checkbox" />
                    <span> Include Lowercase</span>
                </label><br/>
                <label>
                    <input type="checkbox" />
                    <span> Include Uppercase</span>
                </label><br/>
                <label>
                    <input type="checkbox" />
                    <span> Include Digits</span>
                </label><br/>
                <label>
                    <input type="checkbox" />
                    <span> Include Symbols (!@#$%^&*()_+-=[]{}|,.&LT;&GT;/?\"';:)</span>
                </label><br/>
                <label>
                    <span>Exclude Characters : </span>
                    <input type="text" />
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