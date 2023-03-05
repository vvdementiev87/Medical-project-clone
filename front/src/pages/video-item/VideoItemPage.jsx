import React from 'react';

import { useParams } from 'react-router-dom';
import Favorites from '../../components/Favorites/Favorites';

import { video } from '../video-gallery/VideoGallery';

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
	const videoItem = video.find((video) => String(video.id) === videoId);

	return (
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
	);
};

export default VideoItemPage;
