import React, { useEffect, useState } from 'react';
import EnterURL from './EnterURL';
import EnterKeyWords from './EnterKeyWords';
import { Button } from 'react-bootstrap';
import styles from './ContentMenu.module.css'; // Import CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ContentMenu() {
  const [searchKeyWords, setSearchKeyWords] = useState(false);
  const [searchKeyURL, setSearchKeyULR] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Function to update searchKeyWords state
  const updateSearchKeyWords = (newValue) => {
    setSearchKeyWords(newValue);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    updateSearchKeyWords(!searchKeyWords); // Toggle the searchKeyWords state
  };

  // Function to update searchKeyWords state
  const updateSearchKeyULR = (newValue) => {
    setSearchKeyULR(newValue);
  };

  // Function to handle button click
  const handleButtonClick1 = () => {
    updateSearchKeyULR(!searchKeyURL); // Toggle the searchKeyULR state
  };


  // Effect to load username from local storage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Effect to update local storage when username changes
  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php',
        {
          action: 'logout',
          username: username,
        }
      );

      console.log('response.data.status: ' + response.data.status);
      console.log('response.data.status: ' + response.data);
      setUsername("user");
      localStorage.setItem('username', "user"); // Store username in local storage
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            'http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php',
            {
                action: 'logout',
                username: username,
            }
        );

        console.log('response.data.status: ' + response.data.status);
        console.log('response.data.status: ' + response.data);
        if (response.data.status) {
          
            navigate("/signup");
            alert('Successfully Logged Out');
        }
      
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <div>
      {/* {(searchKeyWords === false) && <Button onClick={handleButtonClick} variant="outline-success" className={styles.fullWidthButton}>Search Existing Sites</Button>} {/* Apply full width button style */}

      {(searchKeyURL === false) && <Button onClick={handleButtonClick1} variant="outline-success" className={styles.fullWidthButton}>Search URL</Button>} {/* Apply full width button style */}
      <br />
      <Button variant="outline-danger" className={styles.fullWidthButton}  onClick={handleLogout} >Log Out</Button> {/* Apply full width button style */}
      {searchKeyWords && <EnterKeyWords />}
      <br />
      {searchKeyURL && <EnterURL />}


    </div>
  );
}
