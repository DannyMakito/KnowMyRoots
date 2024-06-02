import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { ArrowRepeat } from 'react-bootstrap-icons';  // Importing the loading icon
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const SelectTribe = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [kingshPAndLinageQ, setKingshPAndLinageQ] = useState('');
  const [warHistoryQ, setWarHistoryQ] = useState('');
  const [indigenousDishesQ, setIndigenousDishesQ] = useState('');

  // States for crawler answers
  const [kingshPAndLinageA, setKingshPAndLinageA] = useState('');
  const [warHistoryA, setWarHistoryA] = useState('');
  const [indigenousDishesA, setIndigenousDishesA] = useState('');

  // States for loading indicators
  const [isKingshPAndLinageLoading, setIsKingshPAndLinageLoading] = useState(false);
  const [isWarHistoryLoading, setIsWarHistoryLoading] = useState(false);
  const [isIndigenousDishesLoading, setIsIndigenousDishesLoading] = useState(false);

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    handleOptionFunction(selectedOption);
  };


  const handleOptionFunction = async (selectedOption) => {

    const kingshipAndLinageQuestion = 'Tell me about the kingship and linage of ' + selectedOption + ' tribe.';
    const warHistoryQuestion = 'Tell me about the both the pre-colonial and colonial wars of ' + selectedOption + ' tribe.';
    const indigenousDishesQuestion = 'Tell me about the indigenous dishes of ' + selectedOption + ' tribe.';

    setKingshPAndLinageQ(kingshipAndLinageQuestion);
    setWarHistoryQ(warHistoryQuestion);
    setIndigenousDishesQ(indigenousDishesQuestion);

    await crawlerAPI(kingshipAndLinageQuestion, setKingshPAndLinageA, setIsKingshPAndLinageLoading);
    await crawlerAPI(warHistoryQuestion, setWarHistoryA, setIsWarHistoryLoading);
    await crawlerAPI(indigenousDishesQuestion, setIndigenousDishesA, setIsIndigenousDishesLoading);
  };

  const crawlerAPI = async (question, setAnswer, setLoading) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost/KnowMyRoots-KnowMyRoots-Bankend/ChatGPT.php', { prompt: question });
      setAnswer(res.data.response); // Ensure response structure matches
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Utility function to check if any of the states are null
  const isAnyStateNull = () => {
    return kingshPAndLinageA === null || warHistoryA === null || indigenousDishesA === null;
  };



  return (
    <Container>
      <Card >
        <Card.Body>
          <Row className="mt-3">
            <Col style={{ margin: '5px' }} lg={8} sm={12}>
              <select value={selectedOption} onChange={handleOptionChange} className="form-control">
                <option value=""><b>Select Tribe</b></option>
                <option value="Khoisan">Khoisan Tribe</option>
                <option value="Bapedi">Pedi Tribe</option>
                <option value="Venda">Venda Tribe</option>
                <option value="Xhosa">Xhosa Tribe</option>
                <option value="Zulu">Zulu Tribe</option>
                <option value="Tsonga">Tsonga Tribe</option>
                <option value="Tswana">Tswana Tribe</option>
                <option value="Swati">Swati Tribe</option>
              </select>
            </Col>
            <Col style={{ margin: '5px' }} lg={2} sm={12}>
              {!isAnyStateNull() && <Button onClick={() => handleOptionFunction(selectedOption)}>Refresh Results</Button>}
            </Col>
            <Col style={{ margin: '5px' }} lg={2} sm={12}>
              <Link to="/chatboard" className='text-center' >
                <Button>Crawl For More</Button>
              </Link>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Kingship And Linage</Card.Title>
                  <Card.Text>
                    {isKingshPAndLinageLoading ? (
                      <p><ArrowRepeat className={styles.spinner} size={24} /> Loading...</p>
                    ) : kingshPAndLinageA ? (
                      <p>{kingshPAndLinageA}</p>
                    ) : (
                      <p>Please select the tribe to view content</p>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Pre-Colonial And Colonial Wars</Card.Title>
                  <Card.Text>
                    {isWarHistoryLoading ? (
                      <p><ArrowRepeat className={styles.spinner} size={24} /> Loading...</p>
                    ) : warHistoryA ? (
                      <p>{warHistoryA}</p>
                    ) : (
                      <p>Please select the tribe to view content</p>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Indigenous Dishes</Card.Title>
                  <Card.Text>
                    {isIndigenousDishesLoading ? (
                      <p><ArrowRepeat className={styles.spinner} size={24} /> Loading...</p>
                    ) : indigenousDishesA ? (
                      <p>{indigenousDishesA}</p>
                    ) : (
                      <p>Please select the tribe to view content</p>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SelectTribe;
