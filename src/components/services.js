import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import search from '../images/search.png';
import iaf from '../images/iaf.jpg';
import zb from '../images/zuluboy.jpg';
import Footer from './Footer';

const ServiceSection = () => {
  return (
<section className='sesction bg-c-light' style={{marginBottom:'30px'}}> 
          <Row>
            <Col md={12} style={{textAlign: 'center'}}>
            <h1 class="main-heading">Our services</h1>
            <div class="underline mx-auto"></div>
              
            <Row style={{marginTop: '50px',justifyContent:'space-evenly', marginBottom: '50px'}}>
     

                      <Card className='col-md-4'   style={{ width: '22rem',paddingBottom: '4rem', boxShadow: '10px'}}>
                        <Card.Img variant="top" src={iaf}/>
                        <Card.Body>
                          <div class="main-heading">Interactive Features</div>
                          <div class="underline mx-auto"></div>
                          <Card.Text>
                          Language Learning Tools: Interactive tools and apps for learning traditional languages.
                            Craft Tutorials: Step-by-step guides and videos on making traditional crafts.
                            Recipe Sharing: A section for traditional recipes, with videos and blogs from people sharing their 
                            culinary heritage.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>

                      <Card className='col-md-4'   style={{ width: '22rem',paddingBottom: '4rem', boxShadow: '10px' } }>
                        <Card.Img variant="top" src={search} />
                        <Card.Body>
                        <div class="main-heading">Name finder</div>
                        <div class="underline mx-auto"></div>
                          <Card.Text>
                            With our powerfuul search engine you find the meaning, history of your cultural name or 
                            even get ideas for baby names 
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>

                      <Card className='col-md-4'   style={{ width: '22rem',paddingBottom: '4rem', boxShadow: '10px' }}>
                        <Card.Img variant="top" src={zb}/>
                        <Card.Body>
                          <div class="main-heading">Historical libray</div>
                          <div class="underline mx-auto"></div>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
            </Row>

            </Col>
          </Row>

          <Footer />
        </section>
   
  );
};

export default ServiceSection;
