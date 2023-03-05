import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VideoList.module.scss';
const VideoItem = ({ video }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.item}
			onClick={() => {
				navigate(`/videos/${video.id}`);
			}}
		>
			<img src={video.imageUrl} alt={video.id} />
			<h4>{video.description}</h4>
		</div>
	);
};

export default VideoItem;
