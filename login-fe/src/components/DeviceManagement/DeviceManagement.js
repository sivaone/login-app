import React from "react";

import "./device-management.css"

export default function DeviceManagement() {
    return (
        <div className="form-wrapper">
            <h2>Devices</h2>
            <form>
                <table>
                    <tr>
                        <th>Device</th>
                        <th>Remove</th>
                    </tr>
                    <tr>
                        <td>iPhone 14</td>
                        <td><button type="submit">Remove</button></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}