import React, {useEffect, useState} from 'react';
import styles from './TopSection.module.scss';
import topFoto from '../../assets/testImages/Top.png';
import topClinicFoto from '../../assets/testImages/clinic.jpg';
import topEmergencyFoto from '../../assets/testImages/emergency.jpg';
import topTrainingFoto from '../../assets/testImages/training.jpg';
import {Parallax} from 'react-parallax';
import RunningString from "../RunningString/RunningString";
import {useNavigate} from "react-router-dom";
import RoundedButton from "../../ui/rounded-button/RoundedButton";

// const news={
// 	id: 1,
// 		title:
// 	'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
// 		imageUrl: '/imagesTest/news_1.jpg',
// 	shortText:
// 	'24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
// 		bigText:
// 	'24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между  Российским обществом симуляционного обучения (РОСОМЕД)  и Обществом симуляции в здравоохранении (SSH). Соглашение подписали Председатель президиума правления РОСОМЕД, Александр Колыш, и Президент SSH, Хару Окуда. Надеемся на эффективное продолжение многолетнего сотрудничества!',
// };

const images = [topFoto, topClinicFoto, topTrainingFoto, topEmergencyFoto];

const TopSection = () => {
    // const [announcement,setAnnouncement]=useState();
    // useEffect(()=>{
    // 	setAnnouncement(news?.shortText);
    // },[])
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
                            {/*{news?*/}
                            <RoundedButton onClick={() => {
                                navigate(`/`);
                            }} text={"Подробнее"}>
                                {/*<RunningString text={announcement}/>*/}
                            </RoundedButton>
                            {/*:""*/}
                            {/*}*/}
                        </div>
                    </div>
                    <div className={`col-lg p-0 ${styles.topImage}`}>
                        {/*<Parallax*/}
                        {/*	blur={10}*/}
                        {/*	bgImage={topFoto}*/}
                        {/*	bgImageAlt="the cat"*/}
                        {/*	strength={200}*/}
                        {/*>*/}
                        {/*	<img src={topFoto} alt="Foto" className={`${styles.mainFoto}`} />*/}
                        {/*</Parallax>*/}

                        {images.map(image => <img className={styles.photoSlider}
                                                  src={image} alt="image"/>)}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopSection;
