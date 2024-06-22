import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Row } from 'react-bootstrap';
import styles from './style.module.css';
import axios from 'axios';
import { PersonBoundingBox } from 'react-bootstrap-icons';

const LogInNavbar = () => {
  const [localUsername, setLocalUsername] = useState(null);
  const [prefName, setPrefName] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setLocalUsername(storedUsername);
      handleEmailChange(storedUsername);
    }
  }, []);

  useEffect(() => {
    if (localUsername) {
      fetchPrefName();
    }
  }, [localUsername]);

  const fetchPrefName = async () => {
    try {
      const response = await axios.get(`http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php?username=${localUsername}`);
      if (response.data && response.data.length > 0 && response.data[0].prefName) {
        setPrefName(response.data[0].prefName);
      } else {
        setPrefName(null);
      }
    } catch (error) {
      console.error('Error fetching preferred name:', error);
      setPrefName(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setLocalUsername(null);
    setPrefName(null);
  };

  const handleEmailChange = (email) => {
    // Extract username before '@' symbol
    const atIndex = email.indexOf('@');
    const extractedUsername = atIndex !== -1 ? email.substring(0, atIndex) : '';
    setPrefName(extractedUsername);
  };

  return (
    <div>
      <BootstrapNavbar expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Row>
              <h2>Know My Roots</h2>
            </Row>
          </Link>
          <BootstrapNavbar.Toggle className={styles.navBarS} aria-controls="navbarNav" />
          <BootstrapNavbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav defaultActiveKey="/home" className="ml-auto">
              <Link className="nav-link" to="/dashboard">
                <p className={styles.navBarLinkS}>Dashboard</p>
              </Link>
              <Link className="nav-link" to="/aboutuslogedin">
                <p className={styles.navBarLinkS}>About Us</p>
              </Link>
              <Link className="nav-link" to="/contactusloggedIn">
                <p className={styles.navBarLinkS}>Contact Us</p>
              </Link>
              <Link className="nav-link" to="/signin" onClick={handleLogout}>
                <p className={styles.navBarLinkS}>Log Out</p>
              </Link>
              <Link className="nav-link">
                <p className={styles.navBarLinkS}>
                  <PersonBoundingBox size={32} color="white" />
                  { localUsername ? localUsername.substring(0, localUsername.indexOf('@')).substring(0, 1).toUpperCase() + localUsername.substring(1, localUsername.indexOf('@')).toLowerCase() : 'Loading....'}
                </p>
              </Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </BootstrapNavbar>
    </div>
  );
};

export default LogInNavbar;
