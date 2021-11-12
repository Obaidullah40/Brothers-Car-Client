import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaPinterest, FaLocationArrow, FaMobileAlt, FaMailBulk, FaFacebook } from "react-icons/fa";
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <div className="bg-footer ps-4 px-2">
                <Row>
                    <Col md={4} xs={12}>
                        <h3 className="text-center">About the Company</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque labore cum similique sequi? Morem, ipsum
                            dolor sit amet consectetur adipisicing elit.
                        </p>
                        <h5 className="text-center">
                            <FaLocationArrow className="color-y" /> 184 Main
                            Collins Street
                        </h5>
                        <h5 className="text-center">
                            <FaMobileAlt className="color-y" /> +8801633-764445
                        </h5>
                        <h5 className="text-center">
                            <FaMailBulk className="color-y" /> admin@company.com
                        </h5>
                        <div className="text-center">
                            <FaFacebook className="text-primary" />{" "}
                            <FaTwitter className="text-info" />{" "}
                            <FaInstagram className="text-instagram" />{" "}
                            <FaPinterest className="text-danger" />
                        </div>
                    </Col>

                    <Col md={4} xs={6}>
                        <h3>Latest Posts</h3>
                        <small className="color-y">August 30, 2022</small>
                        <p className="color-by fs-6">
                            How To Take Better Photos?
                        </p>

                        <br />

                        <small className="color-y">August 30, 2022</small>
                        <p className="color-by fs-6">
                            14 Things To See And Do When Visiting Kyoto
                        </p>

                        <br />

                        <small className="color-y">August 30, 2022</small>
                        <p className="color-by fs-6">
                            Backpacking Laos: A Full Travel Guide for You
                        </p>
                    </Col>

                    <Col xs={6} md={4}>
                        <h3 className="text-center">Latest Tweets</h3>
                        <Row>
                            <Col xs={2}>
                                <FaTwitter className="bg-info" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    @alexherder hi @alexherder, we can’t
                                    recommend anyone specific, but you can find
                                    a list of freelenacers working wit…
                                    https://t.co/fs1gMcMOej
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <FaTwitter className="bg-info" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    @simonrichwright Here’s an article to get
                                    you started with using our support platform:
                                    https://t.co/eiUoQNlHUh Let…
                                    https://t.co/PhSMKT4Rph
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <p className="p-3 text-center bg-bottom">
                Privacy Policy | Accessibility | Statement © 2021 company (
                Obayed Tours & Travels )
            </p>
        </div>
    );
};

export default Footer;