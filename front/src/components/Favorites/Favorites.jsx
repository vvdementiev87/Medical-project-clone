import React, { useEffect, useState } from 'react';
import FavoritesItem from './FavoritesItem';
import styles from './Favorites.module.scss';
import { useAuth } from '../../hooks/useAuth';
import { FavoritesService } from '../../services/favorites.service';
import { useActions } from '../../hooks/useActions';

const Favorites = () => {
	const { user, favorites } = useAuth();
	const { getFavorites } = useActions();

	useEffect(() => {
		getFavorites({ user_id: user.id });
	}, []);

	return (
		<div className={styles.sidebar}>
			{Object.keys(favorites).length > 0 ? (
				Object.keys(favorites).map((key) => {
					return (
						<FavoritesItem
							key={key}
							statement={{
								...favorites[key].object,
								type: favorites[key].type,
								link:
									(favorites[key].type === 1 &&
										`/videos/${favorites[key].type_id}`) ||
									(favorites[key].type === 2 &&
										`/articles/${favorites[key].type_id}`),
							}}
						/>
					);
				})
			) : (
				<p>Вы еще ничего не добавили в избранное</p>
			)}
		</div>
	);
};

export default Favorites;
