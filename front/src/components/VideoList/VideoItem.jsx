import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VideoList.module.scss';
import { Highlight } from "react-instantsearch-dom";
const VideoItem = ({ video }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.item}
			onClick={() => {
				navigate(`/videos/${video.id}`);
			}}
		>
			<img src={video.image_url} alt={video.id} />
			<Highlight className={styles.description} attribute="description" hit={video} />
		</div>
	);
};

export default VideoItem;
