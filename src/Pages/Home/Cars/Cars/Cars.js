import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Car from "../Car/Car";
import "./Cars.css";

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("https://whispering-basin-97817.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setCars(data));
    }, []);

    const history = useHistory();
    const path = history.location.pathname;

    let homeCar;
    if (path === "/home" || path === "/") {
        homeCar = cars.slice(0, 6);
    } else {
        homeCar = cars;
    }

    return (
        <div className="container" id="cars">
            <Row className="pb-3">
                <Col xs={1} md={2}></Col>
                <Col xs={12} md={7}>
                    <h1 className="fs-1 mt-5">
                        Special{" "}
                        <small className="text-warning heading">
                            Deals And
                            <br /> Last Minute
                        </small>{" "}
                        Amazing cars
                    </h1>
                    <p className="text-info">
                        Our cars are specialized in their field and have more
                        than 10 years of experiences. Aenean massa cum sociis
                        Theme natoque.
                    </p>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>

            <Row xs={1} md={3} xxl={4} className="g-4">
                {homeCar.map((car) => (
                    <Car key={car.id} car={car}></Car>
                ))}
            </Row>
        </div>
    );
};

export default Cars;
