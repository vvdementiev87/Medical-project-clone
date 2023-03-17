import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';
import { useQuery } from 'react-query';
import { NewsService } from '../../services/news.service';
import styles from './NewsItemPage.module.scss';
import React, {useEffect, useState} from "react";


const NewsItemPage = () => {
	const { newsId } = useParams();
	console.log(newsId)
	const [data,setData]=useState([]);
	useEffect(()=>{
		const data=[];
		const newsObj={}
		for (let i = 0; i < 18; i++) {
			newsObj[i] = {
				id: i,
				author: 'Author',
				description:
					'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
				imageUrl: '/imagesTest/news_1.jpg',
				shortText:
					'24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
				textHTML:
					'<p><span><strong>24 января 2023&nbsp;года </strong>в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между <strong>Российским обществом симуляционного обучения (РОСОМЕД) </strong>и<strong> Обществом симуляции в здравоохранении (SSH)</strong>.</span></span></p><p><span >Соглашение подписали Председатель президиума правления РОСОМЕД, Александр Колыш, и Президент SSH, Хару Окуда.</span></span></p><p><span><span>Надеемся на эффективное продолжение многолетнего сотрудничества!</span></span></p><p>&nbsp;</p>',
			};
			data.push(newsObj[i])
		}
		setData(data)
	},[])
	//const { isLoading, data }  = useQuery('News list', () => NewsService.getAll());
	
	
	const newsItem = data?.find((news) => String(news.id) === newsId);
	console.log(newsItem)
	return (
	// (isLoading ? (
	// 	<h1>Loading...</h1>
	// ) : (
		<div className={styles.profile}>
			<div  className={styles.news}>
				<h2>{newsItem.description}</h2>
				<p>{'Автор: ' + newsItem.author}</p>
				<img src={newsItem.imageUrl} alt={newsItem.id} />
				{/*<div*/}
				{/*	className={styles.innerHTML}*/}
				{/*	dangerouslySetInnerHTML={{ __html: newsItem.textHTML }}*/}
				{/*/>*/}
			</div>
		 </div>
	);
};

export default NewsItemPage;
