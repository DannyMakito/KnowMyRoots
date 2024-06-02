import React from 'react';
import { Container, Col, Card, Button, Row } from 'react-bootstrap';
import LogInNavbar from './LogInNavbar';
import SelectTribe from './SelectTribe';
import Footer from './Footer';
import styles from './style.module.css';

export default function Darshboard() {
    return (
        <div className={styles.pageContainer}>
            <LogInNavbar />
            <div className={styles.contentWrap} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <SelectTribe style={{ flex: 1 }}/>
            </div>
            <Footer />
        </div>
    );
}
