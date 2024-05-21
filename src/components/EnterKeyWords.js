import React, { useState } from 'react';
import { Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const EnterKeyWords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    axios.get(`http://localhost/KnowMyRoots-KnowMyRoots-Bankend/user-api.php?word=${searchTerm}`)
      .then(response => {
        console.log(response.data);
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  };

  return (
    <div>
      <Form.Group controlId="searchTerm">
        <Form.Control type="text"placeholder='Enter EnterKeyWord(s)' value={searchTerm} onChange={handleChange} />
      </Form.Group>
      <Button onClick={handleSearch}  variant="outline-success" >Search EnterKeyWord(s)</Button>
      <br/>
      <ListGroup>
        {searchResults.map((item, i) => (
          <ListGroup.Item key={i} flush>
            {/* <p>{item.info_id}</p>
            <p>{item.culture_id}</p> */}
            <p>{item.event}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default EnterKeyWords;
