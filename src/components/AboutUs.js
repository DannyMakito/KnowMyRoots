import React from 'react';
import { Card } from 'react-bootstrap';
import { Phone, Whatsapp } from 'react-bootstrap-icons';
import styles from './styles.css';

export default function AboutUs() {
  return (
    <Card className={styles.navComp}>
      <Card.Body>
        <Card.Title><h1 className={styles.h1S} >About Us</h1></Card.Title>
        <Card.Text>
         <p className={styles.paraS}> At <strong><em>KnowMyRoots</em></strong>, we believe that understanding and celebrating cultural diversity is key to fostering a more inclusive and harmonious world. Our mission is to inspire curiosity and appreciation for the rich tapestry of cultures that make up our global community.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
