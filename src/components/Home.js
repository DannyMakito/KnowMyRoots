import React from 'react';
import './styles.css';
import { Card, Col, Navbar, Row,Button  } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import ServiceSection from './services';
import NavBar from './NavBar';


import { Link } from 'react-router-dom';


export default function Home() {
  return (
      
    <div>
      <NavBar />
      <section class="hero">
      
            <h1>Welcome to Knowmyroots Web</h1>
            <p>The purpose is to help a user  find and know more about the roots of their culture.</p>
            <Link to="/signup" className="btn btn-primary">get started</Link>
        </section>

        <section>
          <div class="col-md-12 text-center" >
            <h1 class="main-heading">Vision</h1>
              <div className='col-md-12 md-5 text-center '>
                <div class="underline mx-auto"></div>
              <p style={{fontFamily:'sans serif', fontSize:'25px'}}>
              To celebrate, educate, and preserve the diverse cultural heritage in South africa 
               providing a comprehensive platform for learning, sharing,<br/> and engaging with traditional cultures
              This vision seeks to create a dynamic and inclusive approach to cultural preservation that respects the past while
                 engaging with the present and future.

           </p>

                  <Link className="btn btn-warning shadow">Read more </Link>
              </div>
     
          </div>
        </section>
        <div style={{marginBottom :'60px'}}></div>
       
        <ServiceSection/>
      

    </div>
  
  );
}
