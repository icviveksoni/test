import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Company.css";
import Sidebar from "../../../common/Sidebar";
import Header from "../../../common/Header";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Company() {

    const navigate = useNavigate();

    const [eyeButton, setEyeButton] = useState(false);

    const handleEyeButton = (event) => {
        event.preventDefault();
        setEyeButton((prev) => !prev);
    };


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <form className="company-form">
                        <h2 className="form-title mt-4">Company Details</h2>
                        <div className="form-row">
                            <div className="form-group"><label>Tally Serial No:</label><input type="text" placeholder="Enter Tally Serial No" /></div>
                            <div className="form-group"><label>Edition:</label><input type="text" placeholder="Enter Edition" /></div>
                            <div className="form-group"><label>Licence Administrator:</label><input type="text" placeholder="Enter Licence Administrator" /></div>
                            <div className="form-group"><label>Master ID:</label><input type="text" placeholder="Enter Master ID" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>Alter ID:</label><input type="text" placeholder="Enter Alter ID" /></div>
                            <div className="form-group"><label>Company Code:</label><input type="text" placeholder="Enter Company Code" /></div>
                            <div className="form-group"><label>Company Name:</label><input type="text" placeholder="Enter Company Name" /></div>
                            <div className="form-group"><label>Mailing Name:</label><input type="text" placeholder="Enter Mailing Name" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>Address:</label><input type="text" placeholder="Enter Address" /></div>
                            <div className="form-group"><label>State:</label><input type="text" placeholder="Enter State" /></div>
                            <div className="form-group"><label>City/Town:</label><input type="text" placeholder="Enter City/Town" /></div>
                            <div className="form-group"><label>District:</label><input type="text" placeholder="Enter District" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>Country:</label><input type="text" placeholder="Enter Country" /></div>
                            <div className="form-group"><label>Pincode:</label><input type="text" placeholder="Enter Pincode" /></div>
                            <div className="form-group"><label>Telephone:</label><input type="text" placeholder="Enter Telephone" /></div>
                            <div className="form-group"><label>Mobile:</label><input type="text" placeholder="Enter Mobile" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>Time Zone:</label><input type="text" placeholder="Enter Time Zone" /></div>
                            <div className="form-group"><label>Latitude:</label><input type="text" placeholder="Enter Latitude" /></div>
                            <div className="form-group"><label>Fax:</label><input type="text" placeholder="Enter Fax" /></div>
                            <div className="form-group"><label>E-mail:</label><input type="email" placeholder="Enter Email" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>Base Currency Symbol:</label><input type="text" placeholder="Enter Currency Symbol" /></div>
                            <div className="form-group"><label>Formal Name:</label><input type="text" placeholder="Enter Formal Name" /></div>
                            <div className="form-group"><label>Financial Year Beginning:</label><input type="date" /></div>
                            <div className="form-group"><label>Longitude:</label><input type="text" placeholder="Enter Longitude" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>Books Beginning From:</label><input type="date" /></div>
                            <div className="form-group"><label>Data Synced From Date:</label><input type="date" /></div>
                            <div className="form-group"><label>Data Synced Start Time:</label><input type="time" /></div>
                            <div className="form-group"><label>Data Synced End Time:</label><input type="time" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>Last Data Synced End Time:</label><input type="time" /></div>
                            <div className="form-group"><label>GST No:</label><input type="text" placeholder="Enter GST No" /></div>
                            <div className="form-group"><label>Last Data Synced on Date:</label><input type="date" /></div>
                            <div className="form-group"><label>Last Data Synced Start Time:</label><input type="time" /></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group"><label>CIN No:</label><input type="text" placeholder="Enter CIN No" /></div>
                            <div className="form-group"><label>PAN No:</label><input type="text" placeholder="Enter PAN No" /></div>
                            <div className="form-group"><label>MSME No:</label><input type="text" placeholder="Enter MSME No" /></div>
                        </div>
                        {/* <div className="form-row mt-3 justify-content-end">
                            <button className="submit-btn" type="submit" onClick={() => console.log("Jai Hind...!")}>Submit</button>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    );
}
