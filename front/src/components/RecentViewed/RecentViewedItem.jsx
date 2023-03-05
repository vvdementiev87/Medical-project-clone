import React from 'react';
import styles from './RecentViewed.module.scss';

const RecentViewedItem = ({ statement }) => {
	return (
		<div className={styles.item}>
			<img src={statement.image} alt={statement.title} />
			<h4>{statement.title}</h4>
			<p>{statement.description}</p>
			<a href={statement.link}>{'Продолжить'}</a>
		</div>
	);
};

export default RecentViewedItem;
