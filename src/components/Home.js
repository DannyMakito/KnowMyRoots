import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import styles from './style.module.css';
import Footer from './Footer';
import ServiceSection from './ServiceSection';

export default function Home() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleLogin = () => {
    navigate('/signin'); // Replace with your target route
  };

  return (
    <div  className={styles.bcard} >
    <div >
      <Navbar />
      <div className={styles.contentWrap}>
        <Card className={styles.navComp}>
          <Card.Body>
            <Card.Title className="text-center"> {/* Center align the title */}
              <h1>Welcome To <i>KnowMyRoots</i> Web</h1>
            </Card.Title>
            <Card.Text>
              <p>The purpose is to help a user find and know more about the roots of their culture.</p>
            </Card.Text>
            <div className="text-center"> {/* Center align the button */}
              <Button variant="dark" onClick={handleLogin}>Get Started</Button>
            </div>
          </Card.Body>
        </Card>
        <ServiceSection />
      </div>
      <Footer />
    </div>
    </div>
  );
}
