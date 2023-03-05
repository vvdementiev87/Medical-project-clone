import React from 'react';
import styles from "./Courses.module.css";
import Stetoscope from "../../assets/testImages/stetoscop.jpg";
import Ancient from "../../assets/testImages/ancient.jpg";
import Medicine from "../../assets/testImages/mediczina.jpg";
import MyCarousel from '../MyCarousel/MyCarousel';
const style={
    captionStyle:{
        fontSize:'38px'
    },
    linkStyle:{
        color:'#fff',
        fontSize: '24px'
    }
};
const data = [
    {
        image: Stetoscope,
        caption: "Хирургия",
        description: "Подробнее...",
        captionStyle:style.captionStyle,
        linkStyle: style.linkStyle
    },
    {
        image: Ancient,
        caption: "Анестезиология и реанимация",
        description: "Подробнее...",
        captionStyle:style.captionStyle,
        linkStyle: style.linkStyle
    },
    {
        image: Medicine,
        caption: "Функциональная диагностика",
        description: "Подробнее...",
        captionStyle:style.captionStyle,
        linkStyle: style.linkStyle
    }
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
                        <MyCarousel data={data} height='600px'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;