import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/Organization Structure/Company/Company.css";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Company from "../Organization Structure/Company/Company";
import "bootstrap-icons/font/bootstrap-icons.css";
import Depo from "../Organization Structure/Depo/Depo";

export default function Dashboard() {

    // const navigate = useNavigate();

    const [eyeButton, setEyeButton] = useState(false);
    const [formType, setFormType] = useState(false);

    const handleEyeButton = (event) => {
        event.preventDefault();
        setEyeButton((prev) => !prev);
    };


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Header />
                    <div className="row">
                        <div className="col-md-1">
                            <Sidebar />
                        </div>
                        <div className="col-md-11 mt-5">
                            <form className="company-form">
                                <div className="form-row d-flex justify-content-between align-items-center">
                                    <h2 className="form-title mt-4  justify-content-start">Company Details</h2>
                                    <h1>{eyeButton}</h1>
                                    <button className="btn btn-primary justify-content-end" onClick={(event) => { handleEyeButton(event) }}>
                                        <i className={`bi ${eyeButton ? "bi-eye" : "bi-eye-slash"} me-2`}></i> View
                                    </button>
                                </div>
                                <div className="card p-4">
                                    <div className="form-row p-1">
                                        <div className="form-group"><label>Name:</label><input type="text" placeholder="Enter Name" /></div>
                                        <div className="form-group"><label>Type:</label><select style={{height : "29px"}} onChange={(e) => { setFormType(e.target.value) }}><option value="all">All</option><option value="company">Company</option><option value="depo">Depo</option></select></div>
                                        <div className="form-group"><label>Parent Name:</label><input type="text" placeholder="Enter Parent Name" /></div>
                                        <div className="form-group"><label>Address:</label><input type="text" placeholder="Enter Address" /></div>
                                    </div>
                                </div>
                                {eyeButton ? <> {formType === "company" ? <Company /> : formType === "depo" ? <Depo /> : <><Company /><Depo /></>}</> : ""}
                                <div className="form-row mt-3 justify-content-end">
                                    <button className="submit-btn" type="submit" onClick={() => console.log("Jai Hind...!")}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
