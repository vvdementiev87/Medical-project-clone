import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';
import { useQuery } from 'react-query';
import { NewsService } from '../../services/news.service';
import styles from './NewsItemPage.module.scss';


const NewsItemPage = () => {
	const { newsId } = useParams();
	const { isLoading, data }  = useQuery('News list', () => NewsService.getAll());
	
	
	const newsItem = data?.find((news) => String(news.id) === newsId);

	return (isLoading ? (
		<h1>Loading...</h1>
	) : (
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
	));
};

export default NewsItemPage;
