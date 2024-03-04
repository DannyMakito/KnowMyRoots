import React,{useState} from 'react';
import './LoginSignup.css';
import {FaLock,FaUser,FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';



const LoginSignup =() =>{
    
    const[inputs,setInputs] = useState({})
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
     setInputs(values =>({values,[name]: value})); ///stores all the details from form
    
    }
    const handleSubmit = (event) =>{
        event.preventDefualt();
        console.log(inputs);
    }

    return(
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign up</div>
            <div className='underline'></div>
        </div>

        <form onSubmit={handleSubmit}>
        <div className='inputs'>
             <div className='input'>
                <FaUser className='icon'/>
                <input type='text'placeholder='name' name="name" onChange={handleChange}/>
            </div>
           

            <div className='input'>
                <FaEnvelope className='icon'/>
                <input type='email' placeholder='example@email.com' name="email" onChange={handleChange}/>
            </div>

            <div className='input'>
                <FaLock  className='icon'/>
                <input type='password' placeholder='password' name="password" onChange={handleChange}/>
            </div>

          <div className='input'>
                <FaLock  className='icon'/>
                <input type='password' placeholder='confirm password' name='Cpassword' onChange={handleChange}/>
            </div>
        </div>

        <div className='submit-container'>
        <button className="submit" >Sign Up</button>

            <div className="submitG" >
            <Link to='Logins'>Login</Link>
            </div>
        </div>
        </form>
    </div>
    )
}


export default LoginSignup;
