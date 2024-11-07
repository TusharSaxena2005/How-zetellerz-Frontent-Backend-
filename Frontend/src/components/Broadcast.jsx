import React, { useEffect, useState } from 'react';
import './Broadcast.css'

import { Link } from 'react-router-dom'

import logo from "../assets/images/logo/logo.jpg"
import logout from "../assets/images/icons/logout.svg"
import home from "../assets/images/icons/home.svg"
import gaming from "../assets/images/icons/gaming.svg"
import library from "../assets/images/icons/library.svg"
import plusIcon from "../assets/images/icons/plusIcon.svg"
import sports from "../assets/images/icons/sports.svg"
import clubIcon from "../assets/images/icons/club.svg"
import profileIcon from "../assets/images/icons/profileIcon.svg"
import navBtn from "../assets/images/icons/navBtn.svg"

function Broadcast() {

  const [broadcasts, setBroadcasts] = useState([]);
  const [profile, setProfile] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    destination: '',
    time: '',
    category: '',
  });

  // Fetch data from local storage on load
  useEffect(() => {
    const fetchData = () => {
      const broadcastData = [];
      const profileData = {};

      for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (dataFetched.logined === 1) {
          profileData.username = dataFetched.username;
          profileData.rollNum = dataFetched.rollNum;
          profileData.hostelName = dataFetched.hostelName;
          setProfile(profileData);
        }

        if (dataFetched.broadCast) {
          broadcastData.push(...dataFetched.broadCast);
        }
      }
      setBroadcasts(broadcastData);
    };

    fetchData();
  }, []);

  // Filter broadcasts by category
  const filterBroadcastsByCategory = (category) => {
    setCurrentCategory(category);
    const filtered = broadcasts.filter((broadcast) =>
      category === 'all' || broadcast.category === category
    );
    setBroadcasts(filtered);
  };

  // Handle new post data
  const handleInputChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  // Submit new post
  const submitPost = () => {
    const postData = { ...newPost };
    const updatedBroadcasts = [...broadcasts, postData];

    // Save to localStorage
    for (let i = 1; i < localStorage.length; i++) {
      let dataFetched = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (dataFetched.logined === 1) {
        dataFetched.broadCast = updatedBroadcasts;
        localStorage.setItem(localStorage.key(i), JSON.stringify(dataFetched));
      }
    }

    setBroadcasts(updatedBroadcasts);
    setNewPost({ title: '', destination: '', time: '', category: '' });
  };

  // Delete broadcast
  const deleteBroadcast = (index) => {
    const updatedBroadcasts = broadcasts.filter((_, idx) => idx !== index);

    // Save to localStorage
    for (let i = 1; i < localStorage.length; i++) {
      let dataFetched = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (dataFetched.logined === 1) {
        dataFetched.broadCast = updatedBroadcasts;
        localStorage.setItem(localStorage.key(i), JSON.stringify(dataFetched));
      }
    }

    setBroadcasts(updatedBroadcasts);
  };

  // Log out
  const logOut = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let dataFetched = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (dataFetched.logined === 1) {
        dataFetched.logined = 0;
        localStorage.setItem(localStorage.key(i), JSON.stringify(dataFetched));
        window.location.href = '/login'; // Redirect to login
        break;
      }
    }
  };

  const handlePostClick = () => {
    document.getElementById('outer-post-form').style.display = 'flex'
  };

  return (
    <>
      <nav>
        <div id="outer-nav">
          <div id="inner-nav">
            <div id="nav">
              <Link to="/" id="nav-logo">
                <img src={logo} alt="Logo" id="logo" />
                <h2>ow'ztellerz</h2>
              </Link>
              <button id="logout" onClick={logOut} type="button">
                <img src={logout} alt="Logout" />
                <p>logout</p>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="page1">
        <div id="sideBar1" className="sideBar">
          <ul id="inner-sidebar1">
            <button id="nav-btn">
              <img src={navBtn} alt="Navigation Button" />
            </button>
            <li id="sidebar1-ele1" className="sidebar1-ele">
              <button onClick={() => filterBroadcastsByCategory('all')} id="home-btn" className="sidebar1-ele-btn">
                <img src={home} alt="Home" />
                Home
              </button>
            </li>
            <li id="sidebar1-ele2" className="sidebar1-ele">
              <button onClick={() => filterBroadcastsByCategory('sports')} id="sports-btn" className="sidebar1-ele-btn">
                <img src={sports} alt="Sports" />
                Sports
              </button>
            </li>
            <li id="sidebar1-ele3" className="sidebar1-ele">
              <button onClick={() => filterBroadcastsByCategory('club')} id="club-btn" className="sidebar1-ele-btn">
                <img src={clubIcon} alt="Club" />
                Club
              </button>
            </li>
            <li id="sidebar1-ele4" className="sidebar1-ele">
              <button onClick={() => filterBroadcastsByCategory('library')} id="library-btn" className="sidebar1-ele-btn">
                <img src={library} alt="Library" />
                Library
              </button>
            </li>
            <li id="sidebar1-ele5" className="sidebar1-ele">
              <button onClick={() => filterBroadcastsByCategory('gaming')} id="gaming-btn" className="sidebar1-ele-btn">
                <img src={gaming} alt="Gaming" />
                Gaming
              </button>
            </li>
            <li id="sidebar1-ele6" className="sidebar1-ele">
              <button id="profile-btn" className="sidebar1-ele-btn">
                <img src={profileIcon} alt="Profile" />
                Profile
              </button>
            </li>
            <li id="sidebar1-ele7" className="sidebar1-ele">
              <button onClick={handlePostClick} id="sidebar1-ele7-btn" className="sidebar1-ele-btn">
                <img src={plusIcon} alt="Post" />
                Post
              </button>
            </li>
          </ul>
        </div>
        <div id="sideBar2" className="sideBar">
          <ul id="home-sideBar2" className="inner-sideBar2">
            {broadcasts.map((broadcast, index) => (
              <li key={index} className="sidebar2-ele">
                <div id="writer">
                  <img src="../images/profileIcon.svg" alt="Profile" />
                  <p>@{profile ? profile.username : 'User'}</p>
                </div>
                <div id="title">
                  <p>{broadcast.title}</p>
                </div>
                <div id="destination">
                  <p>{broadcast.destination}</p>
                </div>
                <div id="time">
                  <p>{broadcast.time}</p>
                  <div>
                    <button id="interested">I'm Interested</button>
                    <button onClick={() => deleteBroadcast(index)} className="delete">
                      <img src="../images/delete.svg" alt="Delete" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

        <section id="outer-post-form">
          <div id="inner-post-form">
            <div id="outer-cross">
              <button onClick={() => document.getElementById('outer-post-form').style.display = 'none'} id="cross-btn">
                <img src="../images/cross.svg" alt="Close" />
              </button>
            </div>
            <form
              id="post-form"
              onSubmit={(e) => {
                e.preventDefault();
                submitPost();
              }}
            >
              <input
                type="text"
                id="post-title"
                name="title"
                placeholder="Enter title"
                value={newPost.title}
                onChange={handleInputChange}
                required
              />
              <br />
              <input
                type="text"
                id="post-destination"
                name="destination"
                placeholder="Enter destination"
                value={newPost.destination}
                onChange={handleInputChange}
                required
              />
              <br />
              <input
                type="text"
                id="post-time"
                name="time"
                placeholder="Enter time (Ex.: 1:00 PM)"
                value={newPost.time}
                onChange={handleInputChange}
                required
              />
              <br />
              <select
                id="post-category"
                name="category"
                value={newPost.category} // Use value here instead of selected on option
                onChange={handleInputChange}
                required
              >
                <option value="">Category</option>
                <option value="sports">Sports</option>
                <option value="library">Library</option>
                <option value="club">Club</option>
                <option value="gaming">Gaming</option>
                <option value="other">Other</option>
              </select>
              <br />
              <button type="submit" onClick={() => document.getElementById('outer-post-form').style.display = 'none'} id="post-submit-btn">
                Post
              </button>
            </form>
          </div>
        </section>
    </>
  )
}

export default Broadcast;
