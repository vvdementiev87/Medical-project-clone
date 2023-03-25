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

			<img src={news?.image_url} alt={news?.id} />
			<h4>{news?.title}</h4>
			<p>{news?.short_description}</p>
		</div>
	);
};

export default NewsItem;
