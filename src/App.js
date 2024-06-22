import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm ';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { useEffect, useState } from 'react';
import styles from './components/style.module.css'
import Darshboard from './components/Darshboard';
import AboutUsLogedIn from './components/AboutUsLogedIn';
import ContactUsLogedIn from './components/ContactUsLogedIn';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import ChatBoard from './components/ChatBoard';


function App() {

  return (
   
      <Row>
        <Col md={12}>
          <div style={{ minHeight: '100vh' }} className={styles.backgroundImage}>
            {/* <SignUpForm/> */}
            {/* <LogInForm/> */}
            {/* <NavigationBar/> */}

            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/home"
                  element=
                  {<Home />}
                />
                <Route path="/aboutus"
                  element=
                  {<AboutUs />}
                />

                <Route path="/aboutuslogedin"
                  element=
                  {<AboutUsLogedIn />}
                />

                <Route path="/contactus"
                  element=
                  {<ContactUs />}
                />

                <Route path="/contactuslogedIn"
                  element=
                  {<ContactUsLogedIn />}
                />


                <Route path="/signup"
                  element=
                  {<SignUpForm />}
                />

                

                <Route path="/signin"
                  element=
                  {<LogInForm />}
                />
                <Route path="/darshboard"
                  element=
                  {<Darshboard />}
                />

                <Route path="/chatboard"
                  element=
                  {<ChatBoard />}
                />


              </Routes>
            </BrowserRouter>
          </div>
        </Col>
      </Row>
   

  );
}

export default App;
