import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Phone, Whatsapp } from 'react-bootstrap-icons';
import styles from './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons'; // Import the mission icon
import Footer from './Footer'; // Make sure to import your Footer component
import NavBar from './NavBar';

export default function AboutUs() {
    return (
        <div className={styles.pageContainer} style={{minHeight: '100vh'}}>
            <div className={styles.contentWrap}>
                <NavBar></NavBar>
                <Card style={{width: '60vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '8%', marginBottom: '8%'}}>
                    <Card.Body>
                        <Card.Title><h1 className={styles.h1S} style={{textAlign: 'center'}}>About Us</h1></Card.Title>
                        <div style={{ textAlign: 'center', margin: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
                                {/* Vision Section */}
                                <Row>
                                    <Col>
                                        <div style={{ textAlign: 'center' }}>
                                            <FontAwesomeIcon icon={faEye} size="3x" color="#007bff" />
                                            <h3>Our Vision</h3>
                                            <p>To be the leading ancestry platform globally, inspiring people to discover and embrace their heritage, fostering a sense of identity and community.</p>
                                        </div>
                                    </Col>
                                    <br></br>
                                    <br></br>
                                    <Col>
                                        <div style={{ textAlign: 'center' }}>
                                            <FontAwesomeIcon icon={faBullseye} size="3x" color="#007bff" />
                                            <h3>Our Mission</h3>
                                            <p>Our mission is to empower individuals to explore their roots, connect with their cultural heritage, and build a shared understanding of our collective history.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
