import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://i.ibb.co/sqnqXC1/pexels-mike-120049.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-bg">
                            <h1 className="font fs-1">
                                <small className="text-warning">
                                    Stronger{" "}
                                </small>{" "}
                                Safest Car
                            </h1>
                            <p className="font-2">
                                Best Offer lets you offer the seller a price
                                you're willing to pay for the item.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://i.ibb.co/HK8d9xc/pexels-mike-136872.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-bg">
                            <h2 className="font fs-1">
                                Best{" "}
                                <small className="text-warning">Offer </small>{" "}
                                Price
                            </h2>
                            <p className="font-2">
                                Best Offer lets you offer the seller a price
                                you're willing to pay for the item.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://i.ibb.co/42LzB20/pexels-jose-mueses-1280560.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-bg">
                            <h2 className="font fs-1">
                                7star
                                <small className="text-warning">
                                    {" "}
                                    Fancy Car
                                </small>
                            </h2>
                            <p className="font-2">
                                There isn't a car here that you can buy for less
                                than a six-figure outlay, and one or two might
                                even cost you seven figures.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;