import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css';
import styles1 from './ContentMenu.module.css'; // Import CSS file for styling

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

  return (
    <div class="loginbody">
      <div >
        <div style={{ textAlign: 'center' }}>
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form class="form2" onSubmit={handleSubmit} >
          <h4>SignUp</h4>
            <Table hover responsive>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Label>Enter Username:</Form.Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="New Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Label>Password:</Form.Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="password"
                      name="password1"
                      placeholder="Confirm New Password"
                      value={formData.password1}
                      onChange={handleChange}
                      required
                    />
                    <Form.Label>Confirm Password:</Form.Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      as="select"
                      value={formData.securityQuestion}
                      onChange={handleDropdownChange1}
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
                    <Form.Label>Select Security Question:</Form.Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      name="securityAnswer"
                      placeholder="Enter Your Answer for Security Question"
                      value={formData.securityAnswer}
                      onChange={handleChange}
                      required
                    />
                    <Form.Label>Answer Security Question:</Form.Label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <Button type="submit" variant="outline-success" className={styles1.fullWidthButton}>
                      Create Account
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
