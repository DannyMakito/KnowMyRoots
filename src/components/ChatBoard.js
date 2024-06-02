import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Send } from 'react-bootstrap-icons';
import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Footer from './Footer';
import LogInNavbar from './LogInNavbar';
import styles1 from './ContentMenu.module.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const ChatBoard = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const chatHistoryRef = useRef(null);
    const [convoID, setConvoID] = useState(uuidv4());

    const navigate = useNavigate();


    useEffect(() => {
        getMessageFrmDB();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getMessageFrmDB = async () => {
        try {
            const response = await axios.get('http://localhost/KnowMyRoots-KnowMyRoots-Bankend/getMessages.php');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault(); // Prevent form submission
        if (inputMessage.trim()) {
            const newMessage = { text: inputMessage, sender: 'user1', convoID: convoID };

            // Update the messages state to include the new message
            setMessages(prevMessages => [...(prevMessages || []), newMessage]);

            try {
                const response = await axios.post('http://localhost/KnowMyRoots-KnowMyRoots-Bankend/sendMessage.php', { text: inputMessage, sender: 'user1', convoID: convoID });
                console.log('Message sent successfully:', response.data);
                // Optionally, handle the response data, e.g., update state or UI
            } catch (error) {
                console.error('Error sending message:', error);
                // Optionally, handle the error, e.g., show a notification to the user
            }

            setInputMessage('');
            await getMessageFrmDB();
        }
    };

    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };

    // Function to handle navigation
    const handleToSelectTribe = () => {
        navigate('/darshboard'); // Replace with your target route
    };

    return (
        <>
            <LogInNavbar></LogInNavbar>
            <Row>
                <Col lg={2} sm={12}  style={{width: '60vw', marginLeft: 'auto', marginRight:'auto', borderRadius: '5px', marginTop: '2.5%' }}>
                    <Button variant="outline-dark"  className={styles1.fullWidthButton} onClick={handleToSelectTribe} >Back To Select Tribe</Button>
                </Col>
            </Row>
            <Container fluid className="chat-board d-flex flex-column" style={{ minHeight: '50vh', backgroundColor: '#efe7e7', padding: '2%', width: '60vw', marginLeft: 'auto', borderRadius: '5px', marginBottom: '3%' }}>
                <Row className="flex-grow-1 overflow-auto" ref={chatHistoryRef}>
                    <Col style={{ maxHeight: '80vh' }}>
                        {Array.isArray(messages) && messages.length > 0 ? (
                            <>
                                <ul className="list-unstyled">
                                    {messages.map((message, index) => (
                                        <li key={index} className="clearfix-wrapper mb-2">
                                            <div className="d-flex justify-content-end">
                                                <p className="messageP p-2 rounded" style={{ maxWidth: '60%', backgroundColor: '#b2b2afe7' }}>{message.user_text}</p>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <p className="p-2 rounded" style={{ maxWidth: '60%', backgroundColor: '#dce3ce' }}>{message.crawler_text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <div className="d-flex justify-content-start">
                                <p className="p-2 rounded" style={{ maxWidth: '60%', backgroundColor: '#dce3ce' }}>Hi I am Web Crawler, can I help you.</p>
                            </div>
                        )}
                        <div ></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSendMessage} className="w-100">
                            <InputGroup style={{ height: 'calc(100% / 3)' }}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter text here..."
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                />
                                <Button variant="outline-secondary" type="submit">
                                    <Send size={20} />
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ChatBoard;
