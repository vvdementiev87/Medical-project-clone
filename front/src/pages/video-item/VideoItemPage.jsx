import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';
import { VideoService } from '../../services/video.service';


import styles from './VideoItemPage.module.scss';
import YouTube from 'react-youtube';

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
	const { isLoading, data } = useQuery('Video list', () =>
		VideoService.getAll()
	);
	const videoItem = data?.find((video) => String(video.id) === videoId);

	return (isLoading ? (
		<h1>Loading...</h1>
	) : (
		<div className={styles.profile}>
			<div title={videoItem.title} className={styles.video}>
				<h2>{videoItem.description}</h2>
				<p>{'Автор: ' + videoItem.author}</p>
				<YouTube videoId={videoItem.videoYoutubeId} opts={opts} />

				<div
					className={styles.innerHTML}
					dangerouslySetInnerHTML={{ __html: videoItem.textHTML }}
				/>
				<p>{videoItem.author}</p>
			</div>
			<div className={styles.right}>
				<Favorites />
			</div>
		</div>
	))
};

export default VideoItemPage;
