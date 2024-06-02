import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm ';
import Home from './components/Home';
import Selection from './components/Selection';
import Navbar from './components/NavBar';
import Homepage from './components/Homepage';
import ServiceSection from './components/services';
import SearchBar from './components/EnterURL';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import ContentMenu from './components/ContentMenu';
import { useEffect, useState } from 'react';
import styles from './components/styles.css';



function App() {
  return (
     <BrowserRouter>
     
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

          <Route path="/selection"
                      element=
                      {<Selection/>}
                    />

          <Route path="/services"
                      element=
                      {<ServiceSection/>}
                    />
           <Route path="/homepage"
            element=
            {<Homepage/>}
          />


        
        </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
