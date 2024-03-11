import './journey.css'
import { Carousel } from 'react-bootstrap';
export default function Journey() {
    return (
        <section id="journey">
            <div className="container">
                <h1 className="text-light heading" data-aos="fade-up" data-aos-duration="300">
                    <span>Journey</span>
                </h1>
            </div>
            <div className='journey container d-flex align-items-center justify-content-center p-2'>
                <div>
                    <Carousel className='carousel-fade'>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="/slider/carrom_comp.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>Carrom Competition</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block"
                                    src="/slider/runnerup3.jpg"
                                    alt="First slide"
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Runner's Up - Carrom Competition</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block "
                                    src="/slider/stall.jpg"
                                    alt="First slide"
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
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>Project Handover</h5>
                                {/* <p>The project was successfully completed and delivered to the company.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    className="d-block w-100"
                                    src="/slider/product_audit.jpg"
                                    alt="First slide"
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
                                />
                            </div>
                            <Carousel.Caption>
                                <h5>BlackBook Submission</h5>

                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
        </section >
    )
}
