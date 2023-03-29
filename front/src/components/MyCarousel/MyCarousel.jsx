import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from "react-router-dom";

const MyCarousel = ({data}) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100 h-100"
                            src={slide.image}
                            alt="slider image"
                        />
                        <Carousel.Caption>
                            <h3 style={slide.captionStyle}>{slide.caption}</h3>
                            <NavLink to="/login" style={slide.linkStyle}>{slide.description}</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
};

export default MyCarousel;