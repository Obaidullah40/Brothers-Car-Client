import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars/Cars';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Cars></Cars>
            <div className="video">
                <h2 className="black image text-center">
                    Lamborghini Huracán Performante
                    <br /> <span className="text-dark">OVERVIEW</span>
                </h2>
                <p className="text-center text-secondary px-5">
                    The Huracán Performante has reworked the concept of super
                    sports cars and taken the notion of performance to levels
                    never seen before. The vehicle has been re-engineered in its
                    entirety, as regards its weight, engine power, chassis and
                    above all by introducing an innovative system of active
                    aerodynamics: ALA.
                </p>
                <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/puruLZUC9_0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;