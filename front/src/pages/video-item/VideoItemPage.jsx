import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';
import { VideoService } from '../../services/video.service';

import styles from './VideoItemPage.module.scss';
import YouTube from 'react-youtube';
import MaterialIcon from '../../ui/MaterialIcon';
import { FavoritesService } from '../../services/favorites.service';
import { useAuth } from '../../hooks/useAuth';

const opts = {
	height: '480',
	width: '768',
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 1,
	},
};

const VideoItemPage = () => {
	const { videoId } = useParams();
	const { user } = useAuth();

	const [videoItem, setVideoItem] = useState(null);
	const [error, setError] = useState(null);

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		FavoritesService.checkFavorite({
			type: 1,
			user_id: user.id,
			type_id: videoId,
		}).then((res) => setIsFavorite(res));
		try {
			VideoService.getById(videoId).then((res) => setVideoItem(res));
		} catch (error) {
			setError(error.message);
		}
	}, []);

	const onClickDeleteFavorite = async () => {
		await FavoritesService.deleteFavorite({
			user_id: user.id,
			type_id: videoItem.id,
			type: 1,
		});

		await FavoritesService.checkFavorite({
			type: 1,
			user_id: user.id,
			type_id: videoId,
		}).then((res) => setIsFavorite(res));
	};

	const onClickAddFavorite = async () => {
		await FavoritesService.addFavorite({
			user_id: user.id,
			type_id: videoItem.id,
			type: 1,
		});

		await FavoritesService.checkFavorite({
			type: 1,
			user_id: user.id,
			type_id: videoId,
		}).then((res) => setIsFavorite(res));
	};

	return !videoItem ? (
		<h1>{error}</h1>
	) : (
		<div className={styles.profile}>
			<div title={videoItem.title} className={styles.video}>
				<h2>{videoItem.description}</h2>
				<div className={styles.favorite}>
					{isFavorite ? (
						<button
							title="Add to favorites"
							className={styles.btn}
							onClick={onClickDeleteFavorite}
						>
							<MaterialIcon name={'MdFavorite'} />
						</button>
					) : (
						<button
							title="Add to favorites"
							className={styles.btn}
							onClick={onClickAddFavorite}
						>
							<MaterialIcon name={'MdFavoriteBorder'} />
						</button>
					)}
					<p>{'Автор: ' + videoItem.author}</p>
				</div>
				<YouTube videoId={videoItem.video_youtube_id} opts={opts} />

				<div
					className={styles.innerHTML}
					dangerouslySetInnerHTML={{ __html: videoItem.text_html }}
				/>
			</div>
			<div className={styles.right}>
				<h3>{'Избранное'}</h3>
				<Favorites />
			</div>
		</div>
	);
};

export default VideoItemPage;
