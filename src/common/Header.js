import React from 'react';
import "./Header.css";
import Profile from '../assets/profile.png';
import Bell from '../assets/bell.png';
import Setting from '../assets/settings.png';
import { useState } from "react";
import { use } from 'react';
import BASE_URL from '../Api/BaseUrl/BaseUrl';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  const [checkButtonText, setCheckButtonText] = useState("CHECK IN");

  const checkButton = () => {
    setCheckButtonText(checkButtonText === "CHECK IN" ? "CHECK OUT" : "CHECK IN");
  }


  const handleLogout = async () => {
    try {
        const token = localStorage.getItem("token");  
        if (!token) {
            alert("Already Logged Out!");
            window.location.href = "/login";
            return;
        }

        const response = await fetch(`${BASE_URL}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, 
            },
        });


        localStorage.removeItem("token");  
        alert("Logout Successful! Token Expired.");
        window.location.href = "/"; 

    } catch (error) {
        console.error("Logout Error:", error);
        alert("An error occurred while logging out.");
    }
};



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><strong style={{ color: '#ffffff' }}>PUREDENT 360 ERP</strong></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 me-auto">
              {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Public
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Admin</a></li>
                <li><a class="dropdown-item" href="#">Home</a></li>
                <li><a class="dropdown-item" href="#">Master</a></li>
                <li><a class="dropdown-item" href="#">Purchase Management</a></li>
                <li><a class="dropdown-item" href="#">Ware House Management</a></li>
                <li><a class="dropdown-item" href="#">Quality</a></li>
                <li><a class="dropdown-item" href="#">Production / Manufactuaring</a></li>
                <li>
                    <a class="dropdown-item" href="#">
                        Sales &raquo;
                    </a>
                    <ul class="dropdown-menu dropdown-submenu">        
                        <li><a class="dropdown-item" href="#">Distributor Management SYSmter</a></li>
                        <li><a class="dropdown-item" href="#">Customer Portal</a></li>
                    </ul>
                </li>
                <li><a class="dropdown-item" href="#">Accounts</a></li>
                <li><a class="dropdown-item" href="#">PayRoll</a></li>
                <li><a class="dropdown-item" href="#">Back Office</a></li>
                <li><a class="dropdown-item" href="#">Maintenance</a></li>
                <li><a class="dropdown-item" href="#">Help Desk</a></li>
                <li><a class="dropdown-item" href="#">Management MIS</a></li>
              </ul>
            </li> */}
              {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">ERP</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">HRMS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">CRM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">POS</a>
            </li> */}

            </ul>
            <ul class="navbar-nav mb-2 mb-lg-0 nav-nav ms-auto">
              {/* <button className='check-in-out mt-1' onClick={(checkButtonText) => checkButton(checkButtonText)} >{checkButtonText}</button> */}
              <li class="nav-item dropdown">
                {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#ffffff'}}>
                <img src={Bell} width={20}/>
              </a> */}
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#ffffff' }}>
                  Vivek Soni <img src={Profile} width={30} />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <li><a class="dropdown-item" href="#">My profile</a></li>
                <li><a class="dropdown-item" href="#">Inbox</a></li> */}
                  <li><a class="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                </ul>
              </li>
              {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#ffffff'}}>
                <img src={Setting} width={20}/>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
