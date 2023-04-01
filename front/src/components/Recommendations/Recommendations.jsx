import React, { useEffect } from 'react';
import styles from './Recommendations.module.scss';
import { useAuth } from '../../hooks/useAuth';
import { useActions } from '../../hooks/useActions';
import RecommendationsItem from './RecommendationsItem';

const Recommendations = () => {
	const { recommendations } = useAuth();
	const { getRecommendations } = useActions();
	useEffect(() => {
		getRecommendations();
	}, []);
	return (
		<div className={styles.sidebar}>
			{Object.keys(recommendations).length > 0 &&
				Object.keys(recommendations).map((key) => (
					<RecommendationsItem
						key={key}
						statement={{
							...recommendations[key].object,
							type: recommendations[key].type,
							link:
								(recommendations[key].type === 1 &&
									`/videos/${recommendations[key].type_id}`) ||
								(recommendations[key].type === 2 &&
									`/articles/${recommendations[key].type_id}`) ||
								(recommendations[key].type === 3 &&
									`/news/${recommendations[key].type_id}`),
						}}
					/>
				))}
		</div>
	);
};

export default Recommendations;
