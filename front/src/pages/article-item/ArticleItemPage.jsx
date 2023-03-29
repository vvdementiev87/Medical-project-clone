import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';

import styles from './ArticleItemPage.module.scss';
import { ArticleService } from '../../services/articles.service';
import { FavoritesService } from '../../services/favorites.service';
import MaterialIcon from '../../ui/MaterialIcon';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

const ArticleItemPage = () => {
	const { articleId } = useParams();

	const [isFavorite, setIsFavorite] = useState(false);
	const { user } = useAuth();

	const [articleItem, setArticleItem] = useState(null);

	useEffect(() => {
		FavoritesService.checkFavorite({
			type: 2,
			user_id: user.id,
			type_id: articleId,
		}).then((res) => setIsFavorite(res));

		ArticleService.getById(articleId).then((res) => setArticleItem(res));
	}, []);

	return !articleItem ? (
		<h1>Loading...</h1>
	) : (
		<div className={styles.profile}>
			<div title={articleItem.title} className={styles.articles}>
				<h2>{articleItem.description}</h2>
				<div className={styles.favorite}>
					{isFavorite ? (
						<button
							title="Add to favorites"
							className={styles.btn}
							onClick={async () => {
								await FavoritesService.deleteFavorite({
									user_id: user.id,
									type_id: articleItem.id,
									type: 2,
								});

								await FavoritesService.checkFavorite({
									type: 2,
									user_id: user.id,
									type_id: articleId,
								}).then((res) => setIsFavorite(res));
							}}
						>
							<MaterialIcon name={'MdFavorite'} />
						</button>
					) : (
						<button
							title="Add to favorites"
							className={styles.btn}
							onClick={async () => {
								await FavoritesService.addFavorite({
									user_id: user.id,
									type_id: articleItem.id,
									type: 2,
								});

								await FavoritesService.checkFavorite({
									type: 2,
									user_id: user.id,
									type_id: articleId,
								}).then((res) => setIsFavorite(res));
							}}
						>
							<MaterialIcon name={'MdFavoriteBorder'} />
						</button>
					)}
					<p>{'Автор: ' + articleItem.author}</p>
				</div>

				<img src={articleItem.imageUrl} alt={articleItem.id} />

				<div
					className={styles.innerHTML}
					dangerouslySetInnerHTML={{ __html: articleItem.textHTML }}
				/>
			</div>

			<div className={styles.right}>
				<h3>{'Избранное'}</h3>
				<Favorites />
			</div>
		</div>
	);
};

export default ArticleItemPage;
