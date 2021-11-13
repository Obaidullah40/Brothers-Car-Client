import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);


    return (
        <div className="container" id="reviews">
            <Row className="pb-3">
                <Col xs={1} md={2}></Col>
                <Col xs={12} md={7}>
                    <h1 className="mt-5">
                        OUR{" "}
                        <small className="text-info heading">
                            cars Reviews
                        </small>{" "}
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
                {reviews.map((review) => (
                    <Review key={review.id} review={review}></Review>
                ))}
            </Row>
        </div>
    );
};


export default Reviews;