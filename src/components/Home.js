import React from 'react';
import styles from './styles.css'
import { Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';


export default function Home() {
  return (
  <div class="land">
        <section class="hero">
            <h1>Welcome to Knowmyroots Web</h1>
            <p>The purpose is to help a user  find and know more about the roots of their culture.</p>
            <Link to="/signin" class="btn">get started</Link>
        </section>
      
  </div>
  );
}
