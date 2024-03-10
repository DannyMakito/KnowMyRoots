import React, { useState } from 'react';
import './LoginSignup.css';
import {FaLock,FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';




const Login =()=>{

const[inputs,setInputs] = useState({})
const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
 setInputs(values => ({...values,[name]: value})); ///stores all the details from form

}
const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(inputs);
}
    return(
        <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>

      <form onSubmit={handleSubmit}>
      <div className='inputs'>
            
            <div className='input'>
                <FaEnvelope className='icon'/>
                <input type='email' placeholder='exapme@email.com' name="email" onChange={handleChange} />
            </div>

            <div className='input'>
                <FaLock  className='icon'/>
                <input type='password' placeholder='password' name="password" onChange={handleChange}/>
            </div>

        </div>
         <div className="forgot-password">did you forget your password ?<span>click here</span></div>


        <div className='submit-container'>
            <div className="submitG">
                <Link to='/signup' className='l' >Sign Up</Link>
            </div>
            <button className="submit" >Login</button>
        </div>
      </form>
    </div>

    )



}

export default Login;