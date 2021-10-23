import React from 'react';
import ProfileImage from "../images/squid-games.png";

const Header = ({ basics }) => (
  <header id="header" className="header">
    <div>
      <div class="container">
        <img src={ProfileImage} class="profile-image float-right" alt="Profile image" />
        <div class="section-title">
           <p>
            <h1><span>{basics.name}</span></h1>
            <h3><span>{basics.label}</span></h3>
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;