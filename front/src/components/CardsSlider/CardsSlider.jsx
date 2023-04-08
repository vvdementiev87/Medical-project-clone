import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './CardsSlider.module.scss';
import {useNavigate} from "react-router-dom";




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


const CardsSlider = ({cards,link}) => {
    const navigate = useNavigate();
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
                {cards.map((card, idx) => (
                      <div key={idx} className={`${styles.slide}`} onClick={() => {
                          navigate(`/${link}/${card.id}`);
                      }}>
                          <div className={styles.imgWrapper}>
                              <img src={card.preview_photo} alt={'center'} />
                          </div>
                        <h5>{card.name}</h5>
                      </div>
                ))}
            </Slider>
        </div>
    )
};

export default CardsSlider;