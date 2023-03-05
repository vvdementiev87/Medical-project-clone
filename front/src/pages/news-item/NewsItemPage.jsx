import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';

import styles from './NewsItemPage.module.scss';

import { news } from '../news-gallery/NewsGallery';

const NewsItemPage = () => {
	const { newsId } = useParams();
	const newsItem = news.find((news) => String(news.id) === newsId);

	return (
		<div className={styles.profile}>
			<div title={newsItem.title} className={styles.news}>
				<h2>{newsItem.description}</h2>
				<p>{'Автор: ' + newsItem.author}</p>
				<img src={newsItem.imageUrl} alt={newsItem.id} />

				<div
					className={styles.innerHTML}
					dangerouslySetInnerHTML={{ __html: newsItem.textHTML }}
				/>
			</div>

			<div className={styles.right}>
				<Favorites />
			</div>
		</div>
	);
};

export default NewsItemPage;
