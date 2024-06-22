import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { HourglassSplit } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoadingCrawler = () => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>

        <Modal.Body>
         <Row>
        <p><HourglassSplit size={20}/>Crawling...</p>
         </Row>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default LoadingCrawler;