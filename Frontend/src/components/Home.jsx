import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.css';
import { Link } from 'react-router-dom'
import ScrollTrigger from 'gsap/ScrollTrigger';


import paritosh from '../assets/images/members/Paritosh.png'
import prabhav from '../assets/images/members/Prabhav.png'
import tushar from '../assets/images/members/Tushar.png'
import urvi from '../assets/images/members/Urvi.png'
import logo from '../assets/images/logo/logo.jpg'
import NavLogo from '../assets/images/logo/logo1.jpg'
import instagram from '../assets/images/icons/instagram.svg'
import facebook from '../assets/images/icons/facebook.svg'
import linkdin from '../assets/images/icons/linkdin.svg'
import twitter from '../assets/images/icons/x-twitter.svg'

function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.to("#page1 #name", {
      x: "-55%",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top top",
        end: "bottom -200%",
        scrub: 2,
        pin: true,
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleExploreClick = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let dataFetched = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (dataFetched && dataFetched.logined === 1) {
        window.location.href = "/html/explore.html";
        return;
      }
    }
    window.location.href = "/html/login.html";
  };

  return (
    <>
      <nav id="outer-navbar">
        <div id="inner-nav">
          <img src={NavLogo} alt="Logo" id="logo" />
          <ul id="bar" className="nav">
            <li id="bar-ele1" className="bar-ele">
              <Link to="#page2">About</Link>
            </li>
            <li id="bar-ele2" className="bar-ele">
              <Link to="#mostouter-getInTouch">Contact</Link>
            </li>
            <li id="bar-ele3" className="bar-ele">
              <Link to="/signup">Freshie</Link>
            </li>
            <li id="bar-ele4" className="bar-ele">
              <Link to="/Login">Check in</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div id="page1">
          <h1 id="name">How'ztellerz</h1>
        </div>
      </section>
      <section>
        <div id="page2">
          <h1 id="page2-heading">Meet Our Team</h1>
          <ul id="meet-team">
            <li id="team-mem1" className="team-mem">
              <img src={paritosh} alt="Paritosh Jamwal" />
              <h2>Paritosh <br /> Jamwal</h2>
            </li>
            <li id="team-mem2" className="team-mem">
              <img src={prabhav} alt="Prabhav Gupta" />
              <h2>Prabhav <br /> Gupta</h2>
            </li>
            <li id="team-mem3" className="team-mem">
              <img src={urvi} alt="Urvei Jain" />
              <h2>Urvei <br /> Jain</h2>
            </li>
            <li id="team-mem4" className="team-mem">
              <img src={tushar} alt="Tushar Saxena" />
              <h2>Tushar <br /> Saxena</h2>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div id="explore">
          <button id="explore-btn" onClick={handleExploreClick}>
            <h1>Explore Us</h1>
          </button>
        </div>
      </section>
      <section id="mostouter-getInTouch">
        <div id="outer-getInTouch">
          <h2 id="getInTouch-head">Contact us</h2>
          <div id="GIT-outer-form">
            <form onSubmit={handleSubmit}>
              <div id="inner-form">
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="lastName" placeholder="Last name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="text" name="phone" placeholder="Phone Number" required />
              </div>
              <textarea name="message" cols="20" rows="7" placeholder="Reason to contact us...." required></textarea>
              <button id="form-btn" type="submit">Submit now</button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div id="outer-footer">
          <div id="inner-footer1" className="inner-footer">
            <div id="footer">
              <div id="footer-logo">
                <img src={logo} alt="Logo" id="logo" />
                <h2>ow'zellerz</h2>
              </div>
              <ul id="bar" className="nav">
                <li id="footer-ele1" className="footer-ele"><a href="#page2">About</a></li>
                <li id="footer-ele2" className="footer-ele"><a href="#mostouter-getInTouch">Contact</a></li>
                <li id="footer-ele3" className="footer-ele"><a href="html/signup.html">Freshie</a></li>
                <li id="footer-ele4" className="footer-ele"><a href="html/login.html">Check in</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div id="inner-footer2" className="inner-footer">
            <ul id="footer2-ele1" className="footer2-ele">
              <li>
                <a href="#" id="footer2-link1" className="footer2-links">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#" id="footer2-link2" className="footer2-links">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" id="footer2-link3" className="footer2-links">
                  <img src={linkdin} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="#" id="footer2-link4" className="footer2-links">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
            </ul>
            <ul id="footer2-ele2" className="footer2-ele">
              <li>
                <h4>&copy; copyright reserved 2024</h4>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
