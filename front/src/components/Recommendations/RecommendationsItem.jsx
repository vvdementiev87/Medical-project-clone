import React from 'react';
import styles from './Recommendations.module.scss';

const RecommendationsItem = ({ statement }) => {
	return (
		<div className={styles.item}>
			<img src={statement.imageUrl} alt={statement.title} />
			{statement.type === 1 && (
				<h4>
					{'Видео: '}
					{statement.title}
				</h4>
			)}
			{statement.type === 2 && (
				<h4>
					{'Статья: '}
					{statement.title}
				</h4>
			)}
			{statement.type === 3 && (
				<h4>
					{'Новость: '}
					{statement.title}
				</h4>
			)}
			<p>{statement.description}</p>
			<a href={statement.link}>{'Продолжить'}</a>
		</div>
	);
};

export default RecommendationsItem;
