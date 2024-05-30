// src/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSignOut = () => {
    // Logic to handle sign out (e.g., clearing user session, redirecting, etc.)
    console.log('Sign Out clicked');
  };

  const handleKnowMyRootsClick = () => {
    // Logic for handling clicks on "KnowMyRoots" (e.g., navigation, showing more info, etc.)
    console.log('KnowMyRoots clicked');
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <div className="middle-section" onClick={handleKnowMyRootsClick}>
        <span className="know-my-roots-text">KnowMyRoots</span>
      </div>
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <div className="right-section">
        <div className="sign-out" onClick={handleSignOut}>
          Sign Out
        </div>
      </div>
      {menuVisible && (
        <div className="menu">
          <button className="menu-button">Clan</button>
          <button className="menu-button">Rituals</button>
          <button className="menu-button">History</button>
        </div>
      )}
    </header>
  );
};

export default Header;
