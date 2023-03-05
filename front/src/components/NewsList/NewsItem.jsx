import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewsList.module.scss';
const NewsItem = ({ news }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.item}
			onClick={() => {
				navigate(`/news/${news.id}`);
			}}
		>
			<img src={news.imageUrl} alt={news.id} />
			<h4>{news.description}</h4>
			<p>{news.shortText}</p>
		</div>
	);
};

export default NewsItem;
