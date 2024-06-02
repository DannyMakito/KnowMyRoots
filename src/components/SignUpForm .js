import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer'; // Make sure to import Footer component

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password1: '',
    securityQuestion: '',
    securityAnswer: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));

    // CHECK IF PASSWORDS MATCH WHILE TYPING
    if (formData.password1.length >= formData.password.length) {
      if (formData.password.length === 0 && formData.password1.length > formData.password.length) {
        alert('Enter the "PASSWORD" field first, then "CONFIRM PASSWORD" field');
        setFormData({
          ...formData,
          password: '',
          password1: '',
        });
      } else {
        if ((name === 'password1' && value !== formData.password) || formData.password1 !== formData.password) {
          alert('Passwords do not match');
          setFormData({
            ...formData,
            password: '',
            password1: '',
          });
        }
      }
    }
  };

  const handleDropdownChange1 = (event) => {
    const value = event.target.value;
    // Update the state with the selected value
    setFormData((prevObject) => ({
      ...prevObject,
      securityQuestion: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php', {
        action: 'addUser',
        ...formData,
      });
      navigate('/signin');
      alert('You have Successfully Created Account');
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  // Function to handle navigation
  const handleToLogin = () => {
    navigate('/signin'); // Replace with your target route
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className='signup-container'  style={{width: '60vw', marginLeft: 'auto', 
            marginRight: 'auto', marginTop: '8%', marginBottom: '8%',
            borderRadius: '5px', backgroundColor: '#efe7e7', padding: '3%' }}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Table striped bordered hover responsive>
              <tbody>
                <tr>
                  <td colSpan="2"><h4 className='text-center'>SignUp</h4></td>
                </tr>
                <tr>
                  <td>
                    Enter Username
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      value={formData.username}
                      onChange={handleChange}
                      style={{ borderRadius: '5px', marginBottom: '10px' }}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Password
                  </td>
                  <td>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="New Password"
                      value={formData.password}
                      onChange={handleChange}
                      style={{ borderRadius: '5px', marginBottom: '10px' }}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Confirm Password
                  </td>
                  <td>
                    <Form.Control
                      type="password"
                      name="password1"
                      placeholder="Confirm New Password"
                      value={formData.password1}
                      onChange={handleChange}
                      style={{ borderRadius: '5px', marginBottom: '10px' }}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                   Select Security Question
                  </td>
                  <td>
                    <Form.Control
                      as="select"
                      value={formData.securityQuestion}
                      onChange={handleDropdownChange1}
                      style={{ borderRadius: '5px', marginBottom: '10px' }}
                      required
                    >
                      <option>Select Security Question</option>
                      <option value="What is the name of your favourite dish?">
                        What is the name of your favourite dish?
                      </option>
                      <option value="What is the name of the high school you attend?">
                        What is the name of the high school you attend?
                      </option>
                      <option value="What is the name of your favourite sibling?">
                        What is the name of your favourite sibling?
                      </option>
                      <option value="What is the name of the place you were born?">
                        What is the name of the place you were born?
                      </option>
                    </Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>
                    Answer Security Question
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="securityAnswer"
                      placeholder="Enter Your Answer for Security Question"
                      value={formData.securityAnswer}
                      onChange={handleChange}
                      style={{ borderRadius: '5px', marginBottom: '10px' }}
                      required
                    /></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <Button type="submit" variant="outline-success" style={{ width: '100%', borderRadius: '5px' }}>
                      Create Account
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <Button variant="outline-dark" style={{ width: '100%', borderRadius: '5px' }} onClick={handleToLogin}>
                      Back To LogIn
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </div>
      </div>
      <Footer /> {/* Footer component always at the bottom */}
    </div>
  );
};

export default SignUpForm;
