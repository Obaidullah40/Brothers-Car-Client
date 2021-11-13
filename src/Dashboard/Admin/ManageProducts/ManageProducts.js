import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://whispering-basin-97817.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    // manage DELETE
    const handleDelete = (id) => {
        fetch(`https://whispering-basin-97817.herokuapp.com/services/${id}`, {
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
        </div>
    );
};
export default ManageProducts;
