import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = ({car}) => {
   const { name, description, Price, _id, pic } = car;

    return (
        <div className="rounded">
            <Col>
                <Card className="image mb-4">
                    <Image
                        className="image"
                        variant="top"
                        src={pic}
                        height="200px"
                        rounded-top
                    />
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={8}>
                                <h4>{name}</h4>
                            </Col>
                            <Col className="text-danger" xs={6} md={4}>
                                ${Price}
                            </Col>
                        </Row>

                        <Card.Text className="text-secondary">
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <Button
                                className="mt-2 text-center"
                                variant="warning"
                            >
                                Book Now
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Car;