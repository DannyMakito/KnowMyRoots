import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import styles from './style.module.css';
import axios from 'axios';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Set initial state to false
  const [localUsername, setLocalUsername] = useState(null);
  const navigate = useNavigate();

  // Effect to load username from local storage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setLocalUsername(storedUsername);
    }
  }, []);

  // Function to fetch login status
  const fetchLoginStatus = async () => {
    try {
      const response = await axios.get(`http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php?username=${localUsername}`);
      console.log('API Response:', response.data);
      setLoggedIn(response.data); // Ensure response.data is a boolean
    } catch (error) {
      console.error('Error fetching login status:', error);
    }
  };

  // Effect to fetch login status when component mounts or when localUsername changes
  useEffect(() => {
    if (localUsername) {
      fetchLoginStatus();
    }
  }, [localUsername]);

  // Polling mechanism to periodically fetch login status
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (localUsername) {
        fetchLoginStatus();
      }
    }, 1); // Fetch login status every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [localUsername]);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('username');
    setLocalUsername(null);
    setLoggedIn(false);
  };

  return (
    <div >
      <BootstrapNavbar expand="lg" bg="dark" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h2>Know My Roots</h2>
          </Link>
          <BootstrapNavbar.Toggle className={styles.navBarS} aria-controls="navbarNav" />
          <BootstrapNavbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav defaultActiveKey="/home" className="ml-auto">
                  <Link className="nav-link" to="/">
                    <p className={styles.navBarLinkS}>Home</p>
                  </Link>
                  <Link className="nav-link" to="/aboutus">
                    <p className={styles.navBarLinkS}>About Us</p>
                  </Link>
                  <Link className="nav-link" to="/contactus">
                    <p className={styles.navBarLinkS}>Contact Us</p>
                  </Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
