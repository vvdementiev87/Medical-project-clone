import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import styles from './ConferenceItemPage.module.scss';
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {ConferenciesService} from "../../services/conference.service";


const ConferenceItemPage = () => {
    const navigate = useNavigate();
    const {conferenceId} = useParams();
    console.log(conferenceId)
    const [data, setData] = useState([]);
    useEffect(() => {
        const data = [];
        const confObj = {}
        for (let i = 1; i <= 25; i++) {
            confObj[i] = {
                id: i,
                title:
                    'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
                image_url: '/imagesTest/news_1.jpg',
                short_description:
                    '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
                description:
                    '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между  Российским обществом симуляционного обучения (РОСОМЕД)  и Обществом симуляции в здравоохранении (SSH). Соглашение подписали Председатель президиума правления РОСОМЕД, Александр Колыш, и Президент SSH, Хару Окуда. Надеемся на эффективное продолжение многолетнего сотрудничества!',
                place: "Москва, проспект Пушкинский, 21",
                date_start: '2023-11-09 12:13:40',
                date_end: '2023-11-12 12:13:40'

            };
                data.push(confObj[i])

        }
        setData(data)
    }, [conferenceId])
    // const { isLoading, data }  = useQuery('News list', () => ConferenciesService.getAll());


    const conferenceItem = data.find((conference) => String(conference?.id) === conferenceId);
    console.log(conferenceItem)
    return (
        // (isLoading ? (
        // 	<h1>Loading...</h1>
        // ) : (
        <div>
            <div className="container">
                <div className={styles.profile}>
                    <div className={styles.card}>
                        <img
                            src={conferenceItem?.image_url} alt={conferenceItem?.id}
                            className={styles.cardImage}/>
                        <div className={styles.cardContent}>
                            <span className={styles.cardTitle}>{conferenceItem?.title}</span>
                            <p className={styles.subTitle}>Место проведения:</p>
                            <span>{conferenceItem?.place}</span>
                            <p className={styles.subTitle}>Дата старта:</p>
                                <time dateTime={conferenceItem?.date_start} className={styles.cardDate}>{conferenceItem?.date_start}</time>
                            <p className={styles.subTitle}>Дата окончания:</p>
                            <time dateTime={conferenceItem?.date_end} className={styles.cardDate}>{conferenceItem?.date_end}</time>

                        </div>
                    </div>
                    <p className={styles.cardDescription}>{conferenceItem?.description}</p>

                    <div>
                        <p>Заявки на участие принимаются до {conferenceItem?.date_start.toLocaleString()}</p>

                        <button onClick={() => {
                            navigate(`/`);
                        }} className={styles.buttonRequest}><span>Подать заявку на участие</span></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConferenceItemPage;
