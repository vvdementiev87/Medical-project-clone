import React from 'react';
import VideoItem from './VideoItem';
import styles from './VideoList.module.scss';

const VideoList = ({ video }) => {
	return (
		<div className={styles.videoList}>
			{video.map((item, index) => (
				<VideoItem key={index} video={item} />
			))}
		</div>
	);
};

export default VideoList;
