import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header/Header';
import "./About.css"

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about-img">
                <div className="container p-5">
                    <h1 className="text-center fs-1 font pt-5">
                        About the Brothers Car
                    </h1>
                    <p className="text-center fs-5 font-2 text-color pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni nobis recusandae numquam! Totam voluptas veniam
                        aliquid autem iure amet quod.
                    </p>
                </div>
            </div>
            <Container>
                <Row className="mt-4 mb-3">
                    <Col className="mt-4">
                        <div>
                            <h2 className="font">
                                Welcome to the Brothers Car !
                            </h2>
                            <p className="font-2">
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem corporis suscipit
                                laboriosam nisi ut aliquid ex ea commodi
                                consequatur?
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="margin">
                            <img
                                width="100%"
                                src="https://i.ibb.co/ZH68Dsd/pexels-artem-saranin-1685111.jpg"
                                alt=""
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="img-bg mb-3 mt-3">
                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                            <h5 className="number">San Francisco</h5>
                            <p className="text-about">
                                Lorem ipsum dolor sit amet consecte tur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt labore
                            </p>
                        </Col>
                        <Col xs={6} md={3}>
                            <h5 className="number">New York</h5>
                            <p className="text-about">
                                Lorem ipsum dolor sit amet consecte tur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt labore
                            </p>
                        </Col>
                        <Col xs={6} md={3}>
                            <h5 className="number">Barcelona</h5>
                            <p className="text-about">
                                Lorem ipsum dolor sit amet consecte tur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt labore
                            </p>
                        </Col>
                        <Col xs={6} md={3}>
                            <h5 className="number">London</h5>
                            <p className="text-about">
                                Lorem ipsum dolor sit amet consecte tur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt labore
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;