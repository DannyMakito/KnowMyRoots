import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import styles from './style.module.css'
import axios from 'axios';


const Navbar = () => {
  const[loggedIn, setloggedIn] = useState();

  const[localUsername, setLocalUsername] = useState(null);

  // Effect to load username from local storage on component mount
  useEffect(() => {
   const storedUsername = localStorage.getItem('username');
   if (storedUsername) {
     setLocalUsername(storedUsername);
   }
 }, []);

 console.log("localUsername: " + localUsername);

 // Function to fetch login status
 const fetchLoginStatus = async () => {
  try {
    const response = await axios.get(`http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php?username=${localUsername}`);
    console.log(response.data);
    setloggedIn(response.data);
  } catch (error) {
    console.error('Error fetching login status:', error);
  }
};

// Effect to fetch login status when component mounts
useEffect(() => {
  // Make sure localUsername is set before fetching login status
  if (localUsername) {
    fetchLoginStatus();
  }
}, [localUsername]);
  return (
    <div className={styles.navBarS}>
    <BootstrapNavbar expand="lg" bg='dark' data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <h2 >Know My Roots</h2>
        </Link>
        <BootstrapNavbar.Toggle  className={styles.navBarS} aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav"  className="justify-content-end">
          <Nav variant="underline" defaultActiveKey="/home" className="ml-auto" >
            <Link className="nav-link" to="/" >
             <p className={styles.navBarLinkS}>Home</p>
            </Link>
            <Link className="nav-link" to="/aboutus">
            <p className={styles.navBarLinkS}>About Us</p>
            </Link>
            <Link className="nav-link" to="/contactus" >
            <p className={styles.navBarLinkS}>Contact Us</p>
            </Link>
            <Link className="nav-link" to="/signup">
            <p className={styles.navBarLinkS}>Create Account</p>
            </Link>
            <Link className="nav-link" to="/signin" >
            <p className={styles.navBarLinkS}>Dashboard</p>
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
