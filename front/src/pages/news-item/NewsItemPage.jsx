import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';
import { useQuery } from 'react-query';
import { NewsService } from '../../services/news.service';
import styles from './NewsItemPage.module.scss';
import React, { useEffect, useState } from 'react';
import NewsItem from '../../components/NewsList/NewsItem';

const NewsItemPage = () => {
	const { newsId } = useParams();

	const { isLoading, data } = useQuery('News list', () => NewsService.getAll());

	const newsItem = data.find((news) => String(news?.id) === newsId);
	console.log(newsItem);
	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<div className={styles.singleNews}>
			<div className="container">
				<div className={styles.profile}>
					<div className={styles.card}>
						<img
							src={newsItem?.image_url}
							alt={newsItem?.id}
							className={styles.cardImage}
						/>
						<div className={styles.cardContent}>
							<time dateTime="2021-03-30" className={styles.cardDate}>
								{newsItem?.created_at}
							</time>
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
