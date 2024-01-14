import React, { useEffect } from 'react'
import './journey.css'
import { Carousel } from 'react-bootstrap';
import CarouselItem from './CarouselItem';
export default function Journey() {

    useEffect(() => {


    }, []);
    return (
        <section id="journey">
            <div className="container">
                <h1 className="text-light heading" data-aos="fade-up" data-aos-duration="300">
                    <span>Journey</span>
                </h1>
            </div>
            <div className='journey d-flex align-items-center justify-content-center'>
                <div style={{ margin: '20px', maxHeight: '700px', width: '80%' }}>
                    <Carousel className='carousel-fade' style={{}}>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="/slider/carrom_comp.jpg"
                                alt="First slide"
                                style={{ maxHeight: '650px', objectFit: 'cover' }}
                            />
                            <Carousel.Caption>
                                <h5>Carrom Competition</h5>
                                <p>Intercollege Carrom Competition - Ahmednagar.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ maxHeight: '650px', overflow: 'hidden' }}>
                                <img
                                    className="d-block"
                                    src="/slider/runnerup3.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '700px', width: "100%", objectFit: 'cover' }}
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Runner's Up</h5>
                                <p>Intercollege Carrom Competition - Ahmednagar.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block w-100"
                                    src="/slider/stall.jpg"
                                    alt="First slide"
                                    style={{ height: "600px", width: "auto", objectFit: 'cover' }}
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Profitable Stall</h5>
                                <p>Our stall got first prize - Victory</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block w-100"
                                    src="/slider/internship_cert.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '600px', width: "auto", objectFit: 'cover' }}
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Project Handover</h5>
                                <p>The project was successfully completed and delivered to the company.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block w-100"
                                    src="/slider/product_audit.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '600px', width: "auto", objectFit: 'cover' }}
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Product Audit - Mock Interview</h5>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block w-100"
                                    src="/slider/blackbook3.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '600px', width: "auto", objectFit: 'cover' }}
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>BlackBook Submission</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block w-100"
                                    src="/slider/apnaadda1.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '600px', width: "auto", objectFit: 'cover' }}
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Apna Adda Memories</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block w-100"
                                    src="/slider/apnaadda2.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '600px', width: "auto", objectFit: 'cover' }}
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Apna Adda Memories</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
        </section >
    )
}