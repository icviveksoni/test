


import React, { useState } from "react";
import color from "../Comman/color";
import Colors from "../Comman/color";

export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setOpenDropdown(!openDropdown);
    };


    // const menuItems = [
    //     { id: 1, icon: "fa-comments", text: "Import Transaction" },
    //     { id: 2, icon: "fa-camera-retro", text: "Reports" },
    //     { id: 3, icon: "fa-chart-bar", text: "Analytics" }
    // ];


    return (
        <>
            <nav>
                <div className="dropdown-menu1">
                    <ul>
                        <li className="subnav ">
                            <a href="#" className="d-flex align-items-center text-primary p-2" onClick={toggleDropdown}>
                                <i className="fa fa-globe fa-2x me-2" />
                                <span className="nav-text">Company</span>
                            </a>
                            <ul className={`dropdown-menu ${openDropdown ? "d-block" : "d-none"} position-absolute bg-primary p-2 rounded`} style={{ left: "-15%", width: "180px" }}>
                                {openDropdown && (
                                    <>
                                        <li><a href="#" className="text-white d-block p-2">Work Flow</a></li>
                                        <li><a href="/company" className="text-white d-block p-2">Company</a></li>
                                        <li><a href="/depo" className="text-white d-block p-2">Depo</a></li>
                                        <li><a href="/charts" className="text-white d-block p-2">Charts of Account</a></li>
                                        <li><a href="/products" className="text-white d-block p-2">Products</a></li>
                                        <li><a href="/transaction" className="text-white d-block p-2">Transaction Type</a></li>
                                    </>
                                )}
                            </ul>
                        </li>
                        <li className="has-subnav">
                            <a href="#" style={{ textDecoration: "none", color: "red", padding: "10px", display: "flex", alignItems: "center" }}>
                                <i className="fa fa-comments fa-2x" style={{ marginRight: "10px" }} />
                                <span className="nav-text">Import Transaction</span>
                            </a>
                        </li>
                        {/* {menuItems.map((item) => {

                        })} */}
                        <li className="has-subnav">
                            <a href="#" style={{ textDecoration: "none", color: "red", padding: "10px", display: "flex", alignItems: "center" }}>
                                <i className="fa fa-camera-retro fa-2x" style={{ marginRight: "10px" }} />
                                <span className="nav-text">Reports</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="logout" style={{ position: "absolute", bottom: "20px", width: "100%", listStyle: "none", padding: "0" }}>
                        <li style={{ textAlign: "center", padding: "15px" }}>
                            <a href="#" style={{ color: "white", display: "block" }}>
                                <i className="fa fa-power-off fa-2x" />
                                <span> Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
