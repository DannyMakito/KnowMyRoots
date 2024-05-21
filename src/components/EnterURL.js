import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormControl, Button } from 'react-bootstrap';
import EnterKeyWords from './EnterKeyWords';

const EnterURL = () => {
  const [url, setUrl] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/KnowMyRoots-KnowMyRoots-Bankend/PolulateData.php', { url });
      console.log(response.data.status);
      setSuccess(response.data.status);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormControl type="text" id="url" placeholder='Enter URL' value={url} onChange={(e) => setUrl(e.target.value)} required />
        <Button type="submit" variant="outline-success">Search URL</Button>
      </Form>
      {success && <EnterKeyWords />}
    </div>
  );
};

export default EnterURL;
