import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './styles.css';
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
    <nav class="navbar1">
    <div class="logo">
        <h1>
          Knowmyroot
        </h1>
    </div>
    <ul class="nav-links">
   <li> <Link to="/" class="link">Home</Link></li>
   <li> <Link to="/signin" class="link">login</Link></li>
   <li> <Link to="/services" class="link">servies</Link></li>
   <li> <Link to="/aboutus" class="link">about</Link></li>
   <li> <Link to="/homepage" class="link">mainpage</Link></li>
    </ul>
    <div className="burger" >
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
  );
};

export default Navbar;
