import React, { useEffect } from 'react';
import "./Explore.css"

import MarketplaceIcon from "../assets/images/icons/marketplace.svg"
import BroadCastIcon from "../assets/images/icons/broadcast.svg"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


function Explore() {

  return (
    <>
      <main>
        <div id="main-page">
          <h1 id="main-ele1" className="main-ele">Explore Us</h1>
          <ul id="main-ele2" className="main-ele">
            <Link to="/marketplace" className="ele">
              <li id="ele1" className="inner-ele">
                <img src={MarketplaceIcon} alt="Marketplace Icon" />
                <h2>Market Place</h2>
              </li>
            </Link>
            <Link to="/broadcast" className="ele">
              <li id="ele2" className="inner-ele">
              <img src={BroadCastIcon} alt="Broadcast Icon" />
              {/* <img src="../../public/items/Amul milk.png" alt="Broadcast Icon" /> */}
              <h2>Broadcast</h2>
              </li>
            </Link>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Explore;
