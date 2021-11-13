import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../../Footer/Footer";
import Header from "../../Shared/Header/Header";
import Form from "../Form/Form";

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(
            `https://whispering-basin-97817.herokuapp.com/services/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
    return (
        <>
            <Header></Header>

            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={7} lg={8}>
                        <div className="service-img">
                            <Image width="400px" src={service?.pic} thumbnail />
                        </div>
                        <div className="service-info p-3">
                            <h3>{service?.name}</h3>
                            <h4>
                                <span>Price:</span> {"$" + service?.Price}
                            </h4>
                            <p>{service?.description}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={5} lg={4}>
                        <h5 className="text-center">
                            Your Booking Id: {serviceId}
                        </h5>
                        {<Form service={service}></Form>}
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Booking;
