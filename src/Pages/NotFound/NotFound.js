import React from 'react';
import { Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Image
                src="https://i.ibb.co/nB0TnwL/404-error-page-not-found.jpg"
                fluid
            />

            <Link to="/">
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Go Back Home
                    </Button>
                </div>
            </Link>
        </div>
    );
};

export default NotFound;