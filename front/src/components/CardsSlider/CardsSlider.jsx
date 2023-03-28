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
const left = <FontAwesomeIcon icon={faChevronLeft} />;
const right = <FontAwesomeIcon icon={faChevronRight} />;
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
        nextArrow: right,
        prevArrow: left,
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
        <div className={styles.slider}>
            <Slider {...settings}>
                {images.map((img, idx) => (
                      <div className={idx === imageIndex ? `${styles.slide} ${styles.activeSlide}`: `${styles.slide}`}>
                        <img src={img} alt={img} />
                      </div>
                ))}
            </Slider>
        </div>
    )
};

export default CardsSlider;