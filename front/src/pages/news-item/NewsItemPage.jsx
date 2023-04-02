import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { NewsService } from '../../services/news.service';
import styles from './NewsItemPage.module.scss';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { FavoritesService } from '../../services/favorites.service';
import { useAuth } from '../../hooks/useAuth';

const NewsItemPage = () => {
	const { user } = useAuth();
	const { newsId } = useParams();

	const [newsItem, setNewsItem] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		FavoritesService.checkFavorite({
			type: 3,
			user_id: user.id,
			type_id: newsId,
		});
		try {
			NewsService.getById(newsId).then((res) => setNewsItem(res));
		} catch (error) {
			setError(error.message);
		}
	}, []);

	return !newsItem ? (
		<h1>{error}</h1>
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
							<time dateTime={newsItem?.created_at} className={styles.cardDate}>
								{newsItem?.created_at}
							</time>
							<span className={styles.cardTitle}>{newsItem?.title}</span>
						</div>
					</div>
					<p className={styles.cardDescription}>{newsItem?.description}</p>
				</div>
			</div>
		</div>
	);
};
export default NewsItemPage;
