import React, { useEffect, useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import ContentMenu from './ContentMenu';
import styles1 from './ContentMenu.module.css'; // Import CSS file for styling

const LogInForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [username, setUsername] = useState('');

    const [loggedIn, setloggedIn] = useState();


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

            console.log('response.data.status: ' + response.data.status);
            console.log('response.data.status: ' + response.data);
            if (response.data.status) {
                setUsername(formData.username);
                localStorage.setItem('username', formData.username); // Store username in local storage
                navigate('/content');
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
            setloggedIn(response.data);
        } catch (error) {
            console.error('Error fetching login status:', error);
        }
    };

    // Effect to fetch login status when component mounts
    useEffect(() => {
        // Make sure username is set before fetching login status
        if (username) {
            fetchLoginStatus();
        }
    }, [username]);

    return (
        <>
            <h4>LogIn Credentials</h4>
            <div className={styles.login}>
                {(loggedIn == 1) ?

                    <>
                        <ContentMenu />
                    </>
                    :
                    <>
                        <Form onSubmit={handleSubmit}>
                            <Table striped bordered hover responsive>
                                <tbody>
                                    <tr>
                                        <td>Username :</td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Enter username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Password:</td>
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
                                </tbody>
                            </Table>
                            {/* <Button  variant="outline-success" className={styles1.fullWidthButton} type="submit">Log In</Button> */}
                        </Form>
                    </>

                }

            </div>
        </>
    );
};

export default LogInForm;
