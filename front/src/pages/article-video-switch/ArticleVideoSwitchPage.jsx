import React, { useState } from 'react';
import { set } from 'react-hook-form';
import ArticlesGallery from '../articles-gallery/ArticlesGallery';
import VideoGallery from '../video-gallery/VideoGallery';
import styles from './ArticleVideoSwitchPage.module.scss';
import cn from 'classnames';

const ArticleVideoSwitchPage = () => {
	const [isSwitch, setIsSwitch] = useState(true);
	return (
		<div>
			<div className={styles.selector}>
				<button
					className={cn({ [styles.selected]: isSwitch })}
					onClick={() => setIsSwitch(true)}
				>
					Видеоматериалы
				</button>
				<button
					className={cn({ [styles.selected]: !isSwitch })}
					onClick={() => setIsSwitch(false)}
				>
					Сатьи
				</button>
			</div>
			{isSwitch ? <VideoGallery /> : <ArticlesGallery />}
		</div>
	);
};

export default ArticleVideoSwitchPage;
