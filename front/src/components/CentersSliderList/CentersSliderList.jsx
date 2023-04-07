import React, {useEffect, useState} from 'react';
import styles from './CentersSliderList.module.scss';
import MyCarousel from '../MyCarousel/MyCarousel';
import CardsSlider from "../CardsSlider/CardsSlider";
import {Link} from "react-router-dom";
import {routes} from "../../routes/route";
import {CentersService} from "../../services/centers.service";

const style = {
    captionStyle: {
        fontSize: '38px',
    },
    linkStyle: {
        color: '#fff',
        fontSize: '24px',
    },
};
// const data = [
//     {
//         image: Stetoscope,
//         caption: 'Хирургия',
//         description: 'Подробнее...',
//         captionStyle: style.captionStyle,
//         linkStyle: style.linkStyle,
//     },
//     {
//         image: Ancient,
//         caption: 'Анестезиология и реанимация',
//         description: 'Подробнее...',
//         captionStyle: style.captionStyle,
//         linkStyle: style.linkStyle,
//     },
//     {
//         image: Medicine,
//         caption: 'Функциональная диагностика',
//         description: 'Подробнее...',
//         captionStyle: style.captionStyle,
//         linkStyle: style.linkStyle,
//     },
// ];


const CentersSliderList = () => {
    const [centers, setCenters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            CentersService.getAll().then((res) => setCenters(res));
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    }, []);
    return (
        <div className={styles.courses} id="courses">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.coursesHeading}>Симуляционные центры</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={styles.sliderWrapper}>
                    <CardsSlider cards={centers} link="centers"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Link
                            to={routes.CENTERS.link}
                            className={`${styles.allEvents}`}
                        >
                            Смотреть все центры
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentersSliderList;
