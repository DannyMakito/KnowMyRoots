import React,{useState} from 'react';
import './LoginSignup.css';
import {FaLock,FaUser,FaEnvelope} from "react-icons/fa";


const LoginSignup =() =>{

    const [action, setAction] = useState("Login")



    return(
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>

       <form>
                <div className='inputs'>
            {action==="Login"?<div></div>: <div className='input'>
                <FaLock className='icon'/>
                <input type='text'placeholder='name' name="name"/>
            </div>}
           

            <div className='input'>
                <FaEnvelope className='icon'/>
                <input type='email' placeholder='exapme@email.com' name="email"/>
            </div>

            <div className='input'>
                <FaLock  className='icon'/>
                <input type='password' placeholder='password' name="password"/>
            </div>

          {action==="Login"?<div></div>:   <div className='input'>
                <FaLock  className='icon'/>
                <input type='password' placeholder='confirm password' name='Cpassword'/>
            </div>}
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">did you forget your password ?<span>click here</span></div>}


        <div className='submit-container'>
            <div className={action ==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
            <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}> Login</div>
        </div>
       
       </form>
    </div>
    )
}


export default Loginsignup;
