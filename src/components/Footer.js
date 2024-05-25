import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h6>Company Infomation</h6>
                            <hr/>
                            <p>
                            "KnowMyCulture" could be envisioned as a comprehensive platform dedicated to promoting and 
                            preserving traditional cultures around the world. Such a platform would serve as a hub for cultural education,
                             engagement, and preservation. Here’s a detailed vision for KnowMyCulture:
                            </p>
                        </Col>

                        <Col md={4}>
                        <h6>SOME LINKS</h6>
                        <hr/>
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/about">about</Link></div>
                            <div><Link to="/">contacts</Link></div>
                            <div><Link to="/">new</Link></div>
                        </Col>

                        <Col md={4}>
                        <h6>Contacts infomation</h6>
                        <hr/>
                            <div>Sunning hill 64 brookStreet</div>
                            <div>+100 23990344</div>
                            <div>+27 8392001</div>
                            <div><p>knowmyroot@gmail</p></div>
                        </Col>
                    </Row>
                </Container>
        </section>
    );
}


export default Footer;