import React from "react";

import "./profile.css"

export default function Profile() {
    return (
        <div className="form-wrapper">
            <h2>Profile</h2>
            <form>
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}