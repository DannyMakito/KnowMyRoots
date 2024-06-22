import React from 'react';
import Header from './Header';
import p4 from '../images/p4.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col,Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';




const Library = () => {

  

  return (
    <div>
        <Header  />
     
     <Col style={{marginTop:'12rem'}}>
      <Row>
      <Card className='col-md-4'   style={{ width: '45rem',paddingBottom: '4rem', boxShadow: '10px', flexDirection:'row'}}>

       <ReactPlayer url='https://youtu.be/7sDY4m8KNLc?si=Ru1DVbePEm_2R3It' height='240px' width='380px'/>  
                          <Card.Text>
                           traditional dance by zulu 
                          </Card.Text>

                      </Card>

                      <Card className='col-md-4'   style={{ width: '45rem',paddingBottom: '4rem', boxShadow: '10px', flexDirection:'row'}}>

       <ReactPlayer url='https://youtu.be/7sDY4m8KNLc?si=Ru1DVbePEm_2R3It' height='240px' width='380px' style={{paddingTop:'10px'}}/>  
                          <Card.Text style={{paddingTop:'10px'}}>
                           traditional dance by zulu 
                          </Card.Text>

                      </Card>
      </Row>

      
     </Col>
    </div>
  )
}

export default Library;