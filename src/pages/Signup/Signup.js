import React, {useState} from 'react';
import axios from 'axios';
import '../Login/Login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Profile from '../assets/profile.png';
// import Bell from '../assets/bell.png';
// import Setting from '../assets/settings.png';
// import { useState } from "react";
// import { use } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");

    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const loginclick = async (e) => {
        e.preventDefault(); 
        setError(null);
        setLoading(true);
        const payload = { name:name, email: userName, password: password };
        try {
            const response = await axios.post("http://103.170.114.129:8108/api/v1/register", payload, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

                const { token, name } = response.data; 
                alert(`ho gya bhai login 🎉🎉🎉🎉🎉🎉🎉Login Successful!\n\yo rho name: ${name}\nyo rho token: ${token}`);


            console.log(response.data, "Login Successful");
        } catch (error) {
            console.error("Error Response:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <>
            <div className='container-fluid signup-page'>
                <div className='position-absolute top-50 end-0 translate-middle-y me-5'>
                    <div className="login-container ">
                        <div className="card login-card">
                            <div className="card-body">
                                <h2 className="text-center">Create User</h2>
                                <form className='mt-3' >
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <input
                                                type='text'
                                                className="form-control"
                                                placeholder="Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email/User name/Mobile"
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                            <input
                                                type={true ? "text" : "password"}
                                                className="form-control"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <span className="input-group-text password-toggle" onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: "pointer" }} > <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i> </span>
                                        </div>
                                    </div>
                                    {/* reCAPTCHA */}
                                    {/* <div className="mb-3 d-flex justify-content-center">
                                    <ReCAPTCHA
                                        sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                        onChange={(value) => setCaptcha(value)}
                                    />
                                </div> */}

                                    {/* Forgot Password */}
                                    <div className="d-flex justify-content-between mb-3">
                                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                                    </div>
                                    <button type="submit" onClick={loginclick} className="btn btn-primary w-100">Submit</button>
                                </form>
                                <div className="text-center mt-3">
                                    <span>New User?<Link to="/">Go To Login</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
