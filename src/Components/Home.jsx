import React from 'react';
import './LoginSignup/LoginSignup.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1 className='text2'>
                welcome to the landing page
            </h1>
            <div>
                <Link to="/login" className='text2'>Login</Link>

            </div>
            <div >
                <Link to="/signup"  className='text2'>SignUp </Link>
            </div>
        </div>
    )
}


export default Home;