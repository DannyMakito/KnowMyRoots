import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm ';
import Home from './components/Home';
import Navbar from './components/NavBar';
import ServiceSection from './components/services';
import SearchBar from './components/EnterURL';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import ContentMenu from './components/ContentMenu';
import { useEffect, useState } from 'react';
import styles from './components/styles.css'
import Footer from './components/Footer';


function App() {
  
  return (
  
    
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/aboutus"
            element=
            {<AboutUs/>}
          />

          <Route path="/contactus"
            element=
            {<ContactUs/>}
          />


          <Route path="/signup"
            element=
            {<SignUpForm/>}
          />
          <Route path="/signin"
            element=
            {<LogInForm/>}
          />
          <Route path="/content"
            element=
            {<ContentMenu/>}
          />

<Route path="/services"
            element=
            {<ServiceSection/>}
          />


        
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
