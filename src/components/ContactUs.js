import React from 'react';
import { Phone, Whatsapp } from 'react-bootstrap-icons';
import Navbar from './NavBar';
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from './style.module.css';
import styles1 from './ContentMenu.module.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import WhatsAppLink from './WhatsAppLink';
import PhoneBook from './PhoneBook';
import InstagramLink from './InstagramLink2';
import FacebookLink from './FacebookLink';
import Footer from './Footer';

export default function ContactUs() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleBackToHome = () => {
    navigate('/'); // Replace with your target route
  };

  return (
    <div className={styles.fullHeight}>
      <Navbar />
      <div className={styles.content}>
        <Card style={{ width: '60vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '8%', marginBottom: '8%' }} className={styles.navComp}>
          <Card.Body>
            <Card.Title><h1 className="text-center">Contact Details</h1></Card.Title>
            <Card.Text className="text-center">
              <Row>
                <Col sm={12}>
                  <PhoneBook />
                </Col>
                <Col sm={12}>
                  <WhatsAppLink />
                </Col>
                <Col sm={12}>
                  <InstagramLink />
                </Col>
                <Col sm={12}>
                  <FacebookLink />
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
          <Button variant="outline-dark" className={styles1.fullWidthButton} onClick={handleBackToHome}>Go To Home</Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
