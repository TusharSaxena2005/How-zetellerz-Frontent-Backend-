import React, { useEffect,useState } from 'react';

import "./SignUp.css"

import logo from "../assets/images/logo/logo.jpg"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'



function Signup() {

    const [username, setUsername] = useState("");
    const [rollNum, setRollNum] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hostelName, setHostelName] = useState("");
    const [floorNum, setFloorNum] = useState("");
    const [roomNum, setRoomNum] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username.length < 4) {
            alert("Username can't be less than 4");
        } else if (rollNum.length !== 10) {
            alert("Invalid roll number");
        } else if (phoneNum.length !== 10) {
            alert("Invalid contact number");
        } else if (password.length < 4) {
            alert("Password can't be less than 4");
        } else if (floorNum.length !== 1) {
            alert("Floor number should contain only a single character");
        } else if (roomNum.length !== 3) {
            alert("Room number should contain only 3 characters");
        } else {
            const data = {
                username,
                rollNum,
                phoneNum,
                email,
                password,
                hostelName,
                floorNum,
                roomNum,
                broadCast: [],
                marketPlace: [],
                logined: 1,
            };

            localStorage.setItem(localStorage.length, JSON.stringify(data));
            navigate("/explore"); // Redirect to the explore page
        }
    };

    const handleLogoClick = () => {
        navigate("/"); // Redirect to home page
    };

    return (
        <>
            <main>
                <img id="logo" src={logo} alt="Logo" onClick={handleLogoClick}/>
                <div id="main-block">
                    <form id="signup-form" onSubmit={handleSubmit}>
                        <div>
                            <input id="username" type="text" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} required />
                            <input id="rollno" type="number" placeholder="Roll No." onChange={(e) => setRollNum(e.target.value)} required />
                        </div>
                        <div>
                            <input id="phoneNo" type="number" placeholder="Phone No." onChange={(e) => setPhoneNum(e.target.value)} required />
                            <input id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <input id="password" type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} required />
                            <select name="hostel" id="hostelName" onChange={(e) => setHostelName(e.target.value)} required>
                                <option value="" selected>
                                    Choose hostel
                                </option>
                                <option value="Archimedes A">Archimedes A</option>
                                <option value="Archimedes B">Archimedes B</option>
                                <option value="Armstrong">Armstrong</option>
                                <option value="Aristotle">Aristotle</option>
                                <option value="Columbus">Columbus</option>
                                <option value="Franklin A">Franklin A</option>
                                <option value="Franklin B">Franklin B</option>
                                <option value="IBN">IBN</option>
                                <option value="Marcopolo">Marcopolo</option>
                                <option value="Megalan">Megalan</option>
                                <option value="Nightingale">Nightingale</option>
                                <option value="Pie">Pie</option>
                                <option value="Vasco">Vasco</option>
                            </select>
                        </div>
                        <div>
                            <input id="floorNum" type="number" placeholder="Floor No. (Ex.:- 1)" onChange={(e) => setFloorNum(e.target.value)} required />
                            <input id="roomNum" type="number" placeholder="Room No. (Ex.:- 101)" onChange={(e) => setRoomNum(e.target.value)} required />
                        </div>
                        <button id="submit-btn" type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                        <Link className="forgot" to="/login">
                            Check in
                        </Link>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Signup;
