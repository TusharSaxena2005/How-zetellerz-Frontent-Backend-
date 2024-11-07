import React, { useEffect,useState } from "react";
import "./login.css";

import logo from "../assets/images/logo/logo.jpg"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const Login = () => {

    const [rollno, setRollno] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        for (let i = 1; i < localStorage.length; i++) {
            const storedData = JSON.parse(localStorage.getItem(i));

            if (storedData && storedData.rollNum === rollno) {
                if (storedData.password === password) {
                    storedData.logined = 1;
                    localStorage.setItem(i, JSON.stringify(storedData));
                    navigate("/explore");
                    return;
                } else {
                    alert("Invalid Credentials");
                    return;
                }
            }
        }

        alert("Roll number not found");
    };

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <main>
            <img id="logo" src={logo} alt="Logo" onClick={handleLogoClick} />
            <div id="main-block">
                <form onSubmit={handleLogin}>
                    <input id="rollno" type="number" placeholder="Roll no." onChange={(e) => setRollno(e.target.value)} />
                    <br />
                    <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button id="submit-btn">Submit</button>
                    <Link className="forgot" to="#">
                        forgot password?
                    </Link>
                    <Link className="forgot" to="/signUp">
                        Freshie?
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Login;
