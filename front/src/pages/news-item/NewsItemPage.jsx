import {useParams} from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';
import {useQuery} from 'react-query';
import {NewsService} from '../../services/news.service';
import styles from './NewsItemPage.module.scss';
import React, {useEffect, useState} from "react";
import NewsItem from "../../components/NewsList/NewsItem";


const NewsItemPage = () => {
    const {newsId} = useParams();
    console.log(newsId)
    const [data, setData] = useState([]);
    useEffect(() => {
        const data = [];
        const newsObj = {}
        for (let i = 1; i <= 18; i++) {
            newsObj[i] = {
                id: i,
                title:
                    'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
                imageUrl: '/imagesTest/news_1.jpg',
                shortText:
                    '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
                bigText:
                    '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между  Российским обществом симуляционного обучения (РОСОМЕД)  и Обществом симуляции в здравоохранении (SSH). Соглашение подписали Председатель президиума правления РОСОМЕД, Александр Колыш, и Президент SSH, Хару Окуда. Надеемся на эффективное продолжение многолетнего сотрудничества!',
                created_at: '12.03.2023'
            };
            data.push(newsObj[i])
        }
        setData(data)
    }, [newsId])
    //const { isLoading, data }  = useQuery('News list', () => NewsService.getAll());


    const newsItem = data.find((news) => String(news?.id) === newsId);
    console.log(newsItem)
    return (
        // (isLoading ? (
        // 	<h1>Loading...</h1>
        // ) : (
        <div className={styles.singleNews}>
            <div className="container">
                <div className={styles.profile}>
                    <div className={styles.card}>
                        <img
                            src={newsItem?.imageUrl} alt={newsItem?.id}
                            className={styles.cardImage}/>
                        <div className={styles.cardContent}>
                            <time dateTime="2021-03-30" className={styles.cardDate}>{newsItem?.created_at}</time>
                            <span className={styles.cardTitle}>{newsItem?.title}</span>
                        </div>
                    </div>
                    <p className={styles.cardDescription}>{newsItem?.bigText}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsItemPage;
