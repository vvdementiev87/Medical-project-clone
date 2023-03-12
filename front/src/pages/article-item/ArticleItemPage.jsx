import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';
import { useQuery } from 'react-query';
import styles from './ArticleItemPage.module.scss';
import { ArticleService } from '../../services/articles.service';

const ArticleItemPage = () => {
	const { articleId } = useParams();
	const { isLoading, data } = useQuery('Articles list', () =>
		ArticleService.getAll()
	);

	const articleItem = data?.find((article) => String(article.id) === articleId);

	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<div className={styles.profile}>
			<div title={articleItem.title} className={styles.articles}>
				<h2>{articleItem.description}</h2>
				<p>{'Автор: ' + articleItem.author}</p>
				<img src={articleItem.imageUrl} alt={articleItem.id} />

				<div
					className={styles.innerHTML}
					dangerouslySetInnerHTML={{ __html: articleItem.textHTML }}
				/>
			</div>

			<div className={styles.right}>
				<Favorites />
			</div>
		</div>
	);
};

export default ArticleItemPage;
