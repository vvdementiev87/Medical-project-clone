import React, { useState } from 'react';
import Slider from 'react-slick';
import One from '../../assets/images/course1.jpg';
import Two from '../../assets/images/course2.jpg';
import Three from '../../assets/images/course3.jpg';
import Four from '../../assets/images/course4.jpg';
import Five from '../../assets/images/course5.jpg';
import Six from '../../assets/images/course6.jpg';
import styles from './CardsSlider.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
    One,Two,Three,Four,Five,Six
];
// const left = <FontAwesomeIcon icon={faChevronLeft} />;
// const right = <FontAwesomeIcon icon={faChevronRight} />;


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        Previous
    </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        Next
    </button>
);


const CardsSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        useTransform:true,
        infinite: true,
        lazyload: true,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        cssEase: 'linear',
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />,
        autoplaySpeed:2500,
        pauseOnHover:true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },

        ]
        // beforeChange: (current, next) => setImageIndex(next)
    };
    return (
        <div>
            <Slider {...settings}>
                {images.map((img, idx) => (
                      <div key={idx} className={`${styles.slide}`}>
                        <img src={img} alt={img} />
                      </div>
                ))}
            </Slider>
        </div>
    )
};

export default CardsSlider;