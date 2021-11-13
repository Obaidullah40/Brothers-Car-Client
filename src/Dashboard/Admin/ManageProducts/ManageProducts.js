import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    // manage DELETE
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    window.confirm("Are You sure, You want to delete");
                    const remaining = services.filter(
                        (service) => service._id !== id
                    );
                    setServices(remaining);
                    alert("Deleted Successfully");
                }
            });
    };
    return (
        <div className="manage_services_container">
            <h1 className="text-center text-danger mb-5">Manage products</h1>

            <Row xs={1} md={3} xl={5} className="g-4">
                {/* {services.map((service) => ( */}
                {services.map((service) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={service.pic} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                                <button
                                    onClick={() => handleDelete(service._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <div className="service-container">
                {services.map((service) => (
                    <div className="single-service">
                        <div className="service-img">
                            <img src={service.pic} alt="" />
                        </div>
                        <div className="service-info">
                            <h4>{service.name}</h4>
                            <h4>Price: {service.Price}</h4>
                           
                            <p>{service.description}</p>

                            <div
                                className="mb-3 d-flex justify-content-evenly"
                                style={{ textAlign: "center" }}
                            >
                                <button
                                    onClick={() => handleDelete(service._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};
export default ManageProducts;
