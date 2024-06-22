import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Send } from 'react-bootstrap-icons';
import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Footer from './Footer';
import LogInNavbar from './LogInNavbar';
import styles1 from './ContentMenu.module.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import LoadingCrawler from './LoadingCrawler';

const ChatBoard = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [filterUser1, setFilterUser1] = useState(true);
    const [filterUser2, setFilterUser2] = useState(false);
    const [filterUser3, setFilterUser3] = useState(false);
    const [filterUser4, setFilterUser4] = useState(false);
    const [filterUser5, setFilterUser5] = useState(false);
    const [filterUser6, setFilterUser6] = useState(false);
    const [filterUser7, setFilterUser7] = useState(false);
    const [filterUser8, setFilterUser8] = useState(false);
    const [filterCrawler, setFilterCrawler] = useState(true);
    const [keyword, setKeyword] = useState('');
    const chatHistoryRef = useRef(null);
    const [convoID, setConvoID] = useState(uuidv4());
    const [crwalerLoading, setCrwalerLoading] = useState(false);
    const [localUsername, setLocalUsername] = useState(null);

    //get username from local-storage
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setLocalUsername(storedUsername);
        }
    }, []);

    const handleCrawlerLoading = (isLoading) => {
        setCrwalerLoading(isLoading);
    };

    const navigate = useNavigate();

    const handleRefresh = () => {
        window.location.reload();
    };

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
        handleCrawlerLoading(true)

        if (inputMessage.trim()) {
            let messageToSend = inputMessage;
            // if (filterUser1) {
            //     messageToSend += ' (from user1)';
            // }

            if (filterUser2) {
                messageToSend += '- explain in terms of clans';
            }
            if (filterUser4) {
                messageToSend += '- explain in terms of anthropology';
            }

            if (filterUser5) {
                messageToSend += '- explain in terms of archeology';
            }

            if (filterUser6) {
                messageToSend += '- explain in terms of academic studies and give citation and the sourse in harvard referencing style in the answer';
            }

            if (filterUser7) {
                messageToSend += '- explain in terms of heritage sites';
            }

            if (filterUser8) {
                messageToSend += '- explain in terms of museum where more knowledge can be gathered';
            }

            // if (filterUser7) {
            //     messageToSend += '- explain in terms of museum where more knowledge can be gathered';
            // }

            // if (filterCrawler) {
            //     messageToSend += ' (to crawler)';
            // }
            const newMessage = { text: messageToSend, sender: localUsername, convoID: convoID };


            // Update the messages state to include the new message
            // setMessages(prevMessages => [...(prevMessages || []), newMessage]);

            try {
                const response = await axios.post('http://localhost/KnowMyRoots-KnowMyRoots-Bankend/sendMessage.php', { text: messageToSend, sender: localUsername, convoID: convoID });
                console.log('Message sent successfully:', response.data);

                // Optionally, handle the response data, e.g., update state or UI
                await getMessageFrmDB();
                // handleRefresh();
                setInputMessage('');
                handleCrawlerLoading(false)
            } catch (error) {
                console.error('Error sending message:', error);
                // Optionally, handle the error, e.g., show a notification to the user
            }


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

    const filterMessages = () => {
        if (Array.isArray(messages)) {
            return messages.filter(message => {
                const fromUser1 = filterUser1 && message.sender === 'user1';
                const fromUser2 = filterUser2 && message.sender === 'user1';
                const fromUser3 = filterUser3 && message.sender === 'user1';
                const fromUser4 = filterUser4 && message.sender === 'user1';
                const fromUser5 = filterUser5 && message.sender === 'user1';
                const fromUser6 = filterUser6 && message.sender === 'user1';
                const fromUser7 = filterUser7 && message.sender === 'user1';
                const fromUser8 = filterUser8 && message.sender === 'user1';
                const fromCrawler = filterCrawler && message.sender !== 'user1';
                const containsKeyword = keyword === '' || message.text.toLowerCase().includes(keyword.toLowerCase());
                return (fromUser1 || fromCrawler) && containsKeyword;
            });
        }
    };

    return (
        <>
            <LogInNavbar></LogInNavbar>
            <Row>
                <Col lg={2} sm={12} style={{ width: '60vw', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px', marginTop: '2.5%' }}>
                    <Button variant="outline-dark" className={styles1.fullWidthButton} onClick={handleToSelectTribe}>Back To Select Tribe</Button>
                </Col>
            </Row>
            <Row className="mb-2" style={{ backgroundColor: '#efe7e7' }}>
                <Col>
                    <Form>
                        <Form.Check
                            type="hidden"
                            checked={filterCrawler}
                            onChange={(e) => setFilterCrawler(true)}
                        />
                    </Form>
                </Col>
            </Row>
            <Container fluid className="chat-board d-flex flex-column" style={{ height: '75vh', backgroundColor: '#efe7e7', padding: '2%', width: '60vw', marginLeft: 'auto', borderRadius: '5px', marginBottom: '3%' }}>

                <Row>
                    <Col>
                        <h6><i>Filter By</i></h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Check
                            type="switch"
                            label="Clans"
                            checked={filterUser2}
                            onChange={(e) => setFilterUser2(e.target.checked)}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            type="switch"
                            label="Anthropology"
                            checked={filterUser4}
                            onChange={(e) => setFilterUser4(e.target.checked)}
                        />
                    </Col>
                    <Col> <Form.Check
                        type="switch"
                        label="Archeology"
                        checked={filterUser5}
                        onChange={(e) => setFilterUser5(e.target.checked)}
                    />
                    </Col>
                    <Col>
                        <Form.Check
                            type="switch"
                            label="Academic Literature "
                            checked={filterUser6}
                            onChange={(e) => setFilterUser6(e.target.checked)}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            type="switch"
                            label="Heritage Sites"
                            checked={filterUser7}
                            onChange={(e) => setFilterUser7(e.target.checked)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {crwalerLoading && <LoadingCrawler></LoadingCrawler>}
                    </Col>
                </Row>
                <Row className="flex-grow-1 overflow-auto" ref={chatHistoryRef}>

                    <Col style={{ maxHeight: '80vh' }}>
                        {Array.isArray(filterMessages()) && filterMessages().length > 0 ? (
                            <>
                                <ul className="list-unstyled">
                                    {filterMessages().map((message, index) => (
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
                                {/* <p className="p-2 rounded" style={{ maxWidth: '60%', backgroundColor: '#dce3ce' }}>Hi I am Web Crawler, can I help you.</p>
                             */}
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
                                {crwalerLoading ?
                                    (
                                        <Button variant="outline-secondary" type="submit">
                                            <Send size={20} /> RE-SEND
                                        </Button>
                                    )
                                    :
                                    (
                                        <Button variant="outline-secondary" type="submit">
                                            <Send size={20} /> SEND
                                        </Button>
                                    )

                                }
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
