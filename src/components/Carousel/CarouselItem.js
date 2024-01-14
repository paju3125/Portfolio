import React from 'react'
import { Carousel } from 'react-bootstrap'
export default function CarouselItem(props) {
    return (
        <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src={props.img}
                alt="First slide"
                style={{ maxHeight: '100%', objectFit: 'cover' }}
            />
            <Carousel.Caption>
                <h5>{props.title}</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}
