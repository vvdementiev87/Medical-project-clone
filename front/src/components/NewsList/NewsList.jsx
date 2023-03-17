import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.scss';
import NewsInMedicine from "../../assets/testImages/newInMedicine.jpg";
import Relations from "../../assets/testImages/relations.jpg";
import Digital from "../../assets/testImages/digital.jpg";
import NewsItemPage from "../../pages/news-item/NewsItemPage";

const data = [
	{
		imageUrl: NewsInMedicine,
		title: 'Новые технологии в медицине',
		description: 'Подробнее...',
		shortText: '12.02.2023',
	},
	{
		imageUrl: Relations,
		title: 'Новые технологии в медицине',
		description: 'Подробнее...',
		shortText: '12.02.2023',
	},
	{
		imageUrl: Digital,
		title: 'Новые технологии в медицине',
		description: 'Подробнее...',
		shortText: '12.02.2023',
	},
];

const NewsList = ({ news }) => {
	console.log(news)
	return (
		<div className={styles.newsList}>
			{news.map((item, index) => (
				<NewsItem key={index} news={item} />
			))}
		</div>
	);
};

export default NewsList;
