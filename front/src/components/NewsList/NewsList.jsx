import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.scss';


const NewsList = ({ news }) => {
	console.log(news);
	return (
		<div className={styles.newsList}>
			{news.map((item, index) => (
				<NewsItem key={index} news={item} />
			))}
		</div>
	);
};

export default NewsList;
