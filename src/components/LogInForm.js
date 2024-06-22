import React, { useEffect, useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css';
import styles1 from './ContentMenu.module.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import LogInNavbar from './LogInNavbar';
import Navbar from './NavBar';
import Footer from './Footer'; // Import Footer component

const LogInForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [username, setUsername] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);

    const [prefName, setPrefName] = useState(null);

    // Effect to load username from local storage on component mount
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    // Function to handle username input change
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Effect to update local storage when username changes
    useEffect(() => {
        localStorage.setItem('username', username);
    }, [username]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.trim(),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php',
                {
                    action: 'login',
                    ...formData,
                }
            );

            //console.log('response.data.status: ', response.data);
            if (response.data.status) {
                setUsername(formData.username);
                localStorage.setItem('username', formData.username); // Store username in local storage
                navigate('/darshboard');
                alert('Successfully Logged In');
            } else {
                alert('Invalid Password Or username.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchLoginStatus = async () => {
        try {
            const response = await axios.get(`http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php?username=${username}`);
            console.log(response.data);
            setLoggedIn(response.data);
        } catch (error) {
            console.error('Error fetching login status:', error);
            alert(error.message);
        }
    };

    // Effect to fetch login status when component mounts
    useEffect(() => {
        // Make sure username is set before fetching login status
        if (username) {
            fetchLoginStatus();
        }
    }, [username]);

    // Function to handle navigation
    const handleToHome = () => {
        navigate('/'); // Replace with your target route
    };

    return (
        <div className='app-container'>
            <Navbar />
            <div className='login-container' style={{
                width: '60vw', marginLeft: 'auto',
                marginRight: 'auto', marginTop: '8%', marginBottom: '8%',
                borderRadius: '5px', backgroundColor: '#efe7e7', padding: '3%'
            }}>
                <div className='login-form'>
                    <Form onSubmit={handleSubmit}>
                        <Table striped bordered hover responsive>
                            <tbody>
                                <tr>
                                    <td colSpan="2"><h4 className='text-center'>LogIn Credentials</h4></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <Form.Control
                                            type="email"
                                            name="username"
                                            placeholder="example@gmail.com"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Button type="submit" variant="outline-success" className={styles1.fullWidthButton}>Log In</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Link to="/reset" className='text-center' >
                                            <Button style={{ color: 'black' }} variant="outline-warning" className={styles1.fullWidthButton}>
                                                Reset Password
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Link to="/signup" className='text-center' >
                                            <Button variant="outline-dark" className={styles1.fullWidthButton}>
                                                Don't have an account? Sign up
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Button variant="outline-dark" className={styles1.fullWidthButton} onClick={handleToHome} >Go To Home</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LogInForm;
