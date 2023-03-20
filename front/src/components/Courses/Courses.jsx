import React from 'react';
import styles from './Courses.module.scss';
import Stetoscope from '../../assets/testImages/stetoscop.jpg';
import Ancient from '../../assets/testImages/ancient.jpg';
import Medicine from '../../assets/testImages/mediczina.jpg';
import MyCarousel from '../MyCarousel/MyCarousel';
import course1 from '../../assets/images/course1.jpg';
import course2 from '../../assets/images/course2.jpg';
import course3 from '../../assets/images/course3.jpg';
import course4 from '../../assets/images/course4.jpg';
import course5 from '../../assets/images/course5.jpg';
import course6 from '../../assets/images/course6.jpg';
import CardsSlider from "../CardsSlider/CardsSlider";

const style = {
    captionStyle: {
        fontSize: '38px',
    },
    linkStyle: {
        color: '#fff',
        fontSize: '24px',
    },
};
const data = [
    {
        image: Stetoscope,
        caption: 'Хирургия',
        description: 'Подробнее...',
        captionStyle: style.captionStyle,
        linkStyle: style.linkStyle,
    },
    {
        image: Ancient,
        caption: 'Анестезиология и реанимация',
        description: 'Подробнее...',
        captionStyle: style.captionStyle,
        linkStyle: style.linkStyle,
    },
    {
        image: Medicine,
        caption: 'Функциональная диагностика',
        description: 'Подробнее...',
        captionStyle: style.captionStyle,
        linkStyle: style.linkStyle,
    },
];
const courses = [
    {image: course1}, {image: course2}, {image: course3}, {image: course4}, {image: course5}, {image: course6}
];

const Courses = () => {
    return (
        <div className={styles.courses} id="courses">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.coursesHeading}>Курсы</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={styles.sliderWrapper}>
                    <CardsSlider/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
