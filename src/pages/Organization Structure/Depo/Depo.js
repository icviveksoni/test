import React, { useState } from "react";
import Sidebar from "../../../common/Sidebar";
import Header from "../../../common/Header";

const Depo = () => {

    const [menuOpen, setMenuOpen] = useState(true);

    const handleMenu = (e) => {
        e.preventDefault();
        // alert(!menuOpen);
        setMenuOpen(!menuOpen);
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <form className="depo-form">
                    <h2 className="form-title mt-4">Depo</h2>
                    {/* <div className="form-row d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-start">
                                    
                                </div>
                        <button className="" onClick={(e) => handleMenu(e)} >
                            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} me-2`}></i>Menu<label>{menuOpen}</label>
                        </button>
                        {menuOpen && (
                            <ul className="list-unstyled bg-light border rounded p-2 shadow position-absolute"
                                style={{ top: "100%", left: "0", minWidth: "150px", zIndex: "1000" }}>
                                <li><a href="#" className="d-block text-dark p-2">Edit</a></li>
                                <li><a href="#" className="d-block text-dark p-2">Delete</a></li>
                            </ul>
                        )}
                        <div className="list-unstyled">
                            <label>Parent</label>
                        </div>
                        <div className="list-unstyled">
                            <button className="submit-btn" type="submit" onClick={() => console.log("Jai Hind...!")}><i className="bi bi-plus me-2"></i>New</button>
                        </div>
                    </div> */}
                    <div className="form-row mt-3">
                        <div className="form-group"><label>Master ID:</label><input type="text" placeholder="Enter Master ID" /></div>
                        <div className="form-group"><label>Alter ID:</label><input type="text" placeholder="Enter Alter ID" /></div>
                        <div className="form-group"><label>Name:</label><input type="text" placeholder="Enter Licence Administrator" /></div>
                        <div className="form-group"><label>Mailing Name:</label><input type="text" placeholder="Enter Mailing Name" /></div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="form-group"><label>Address:</label><input type="text" placeholder="Enter Address" /></div>
                        <div className="form-group"><label>State:</label><input type="text" placeholder="Enter State" /></div>
                        <div className="form-group"><label>City/Town:</label><input type="text" placeholder="Enter City/Town" /></div>
                        <div className="form-group"><label>District:</label><input type="text" placeholder="Enter District" /></div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="form-group"><label>Country:</label><input type="text" placeholder="Enter Country" /></div>
                        <div className="form-group"><label>Pincode:</label><input type="text" placeholder="Enter Pin Code" /></div>
                        <div className="form-group"><label>Telephone:</label><input type="text" placeholder="Enter Telephone" /></div>
                        <div className="form-group"><label>Mobile:</label><input type="text" placeholder="Enter Mobile" /></div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="form-group"><label>Fax No.:</label><input type="text" placeholder="Enter Fax Number" /></div>
                        <div className="form-group"><label>E-mail:</label><input type="text" placeholder="Enter Email" /></div>
                        <div className="form-group"><label>Time Zone:</label><input type="text" placeholder="Enter Timezone" /></div>
                        <div className="form-group"><label>Latitude:</label><input type="text" placeholder="Enter Latitude" /></div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="form-group"><label>Longitude:</label><input type="text" placeholder="Enter Longitude" /></div>
                        <div className="form-group"><label>Data Synced From Date:</label><input type="date" placeholder="Date from" /></div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="form-group"><label>Data Synced Start Time:</label><input type="text" placeholder="Start Time" /></div>
                        <div className="form-group"><label>Data Synced End Time:</label><input type="text" placeholder="End Time" /></div>
                        <div className="form-group"><label>Last Data Synced on Date:</label><input type="date" placeholder="Synced On Date" /></div>
                        <div className="form-group"><label>Last Data Synced Start Time:</label><input type="text" placeholder="Start Time" /></div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="form-group"><label>Last Data Synced End Time:</label><input type="text" placeholder="Synced End Time" /></div>
                        <div className="form-group"><label>In Active:</label><select style={{height : "29px"}}><option>Active</option><option>Inactive</option></select></div>
                    </div>
                    {/* <div className="form-row mt-3 justify-content-end">
                        <button className="submit-btn" type="submit" onClick={() => console.log("Jai Hind...!")}>Submit</button>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

const InputField = ({ label, type }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input type={type} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
    );
};

export default Depo;