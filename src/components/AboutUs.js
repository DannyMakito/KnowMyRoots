import React from 'react';
import { Card } from 'react-bootstrap';
import { Phone, Whatsapp } from 'react-bootstrap-icons';
import styles from './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons'; // Import the mission icon
import Footer from './Footer';
import NavBar from './NavBar';

export default function AboutUs() {
  return (
    <Card >
      <NavBar />
      <Card.Body>
        <Card.Title><h1 className={styles.h1S} >About Us</h1></Card.Title>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
            {/* Vision Section */}
            <div style={{ textAlign: 'center' }}>
              <FontAwesomeIcon icon={faEye} size="3x" color="#007bff" />
              <h3>Our Vision</h3>
              <p>To be the leading ancestry platform globally, inspiring people to discover and embrace their heritage, <br/>fostering a sense of identity and community.
              Our vision seeks to create a dynamic and inclusive approach to cultural preservation that respects the past while
                 engaging with the present and future.
              </p>
              
            </div>
            {/* Mission Section */}
            <div style={{ textAlign: 'center' }}>
              <FontAwesomeIcon icon={faBullseye} size="3x" color="#007bff" />
              <h3>Our Mission</h3>
              <p>Our mission is to empower individuals to explore their roots, connect with their cultural heritage, and build a shared understanding of our collective history.</p>
            </div>
          </div>
        </div>
      </Card.Body>

      <Footer/>
    </Card>

    
  );
}
