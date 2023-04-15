import React, {useEffect, useState} from 'react';
import styles from './TopSection.module.scss';
import robotoFoto from '../../assets/images/topSection/robot.jpg';
import sonoFoto from '../../assets/images/topSection/sono.jpg';
import laparoFoto from '../../assets/images/topSection/laparo.jpg';
import colonoFoto from '../../assets/images/topSection/colono.jpg';
import {useNavigate} from "react-router-dom";
import RoundedButton from "../../ui/rounded-button/RoundedButton";



const images = [robotoFoto, sonoFoto, laparoFoto, colonoFoto];

const TopSection = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.topSection} id="topSection">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-sm">
                        <div className={`${styles.topWrapper}`}>
                            <h1 className={`${styles.topHeading}`}>
                                Белорусское общество симуляционного обучения в медицине
                            </h1>
                            <p className={`${styles.topDescription}`}>
                                БОСОМ объединяет профессионалов в области различных направлений
                                медицины и ставит целью широкое внедрение в медицинскую практику
                                симуляционных технологий в медицинском образовании, повышение
                                квалификации медицинских работников, проведение сертификации и
                                аттестации, внедрение передовых технологий в сфере
                                здравоохранения
                            </p>
                            <RoundedButton
                                to="/history"
                                text="Подробнее"
                            >
                            </RoundedButton>
                        </div>
                    </div>
                    <div className={`col-lg p-0 ${styles.topImage}`}>

                        {images.map((image,index) => <img key={index} className={styles.photoSlider}
                                                  src={image} alt="image"/>)}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopSection;
