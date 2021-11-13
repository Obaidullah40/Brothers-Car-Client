import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Footer/Footer';
import Header from '../../Shared/Header/Header';
import Form from "../Form/Form";


const Booking = () => {
    <Header></Header>
   const { serviceId } = useParams();
   const [service, setService] = useState({});

   useEffect(() => {
       fetch(`http://localhost:5000/services/${serviceId}`)
           .then((res) => res.json())
           .then((data) => setService(data));
   }, []);
    return (
        <>
        <Header></Header>
        <Container className='mt-3'>
           <Row>
               <Col xs={12} md={8} lg={8}>
                   <Card className="bg-dark text-white">
                       <Card.Img src={service.pic} alt="Card image" />
                       <Card.ImgOverlay>
                           <Card.Title>{service.name}</Card.Title>
                       </Card.ImgOverlay>
                       <Card.Text>{service.description}</Card.Text>
                   </Card>
               </Col>
               <Col xs={12} md={4} lg={4}>
                   <h5 className="text-center">Your Booking Id: {serviceId}</h5>
                   {<Form service={service}></Form>}
               </Col>
           </Row>
       </Container>
       <Footer></Footer>
       </>
   );
};

export default Booking;