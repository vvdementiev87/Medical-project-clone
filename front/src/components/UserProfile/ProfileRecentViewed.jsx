import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import RecentViewedItem from '../RecentViewed/RecentViewedItem';
import styles from './UserProfile.module.scss';
const ProfileRecentViewed = () => {
	const { user, recentViewed } = useAuth();
	const { getRecentViewed } = useActions();

	useEffect(() => {
		getRecentViewed();
	}, []);

	return (
		<div className={styles.favorites}>
			{Object.keys(recentViewed).length > 0 &&
				Object.keys(recentViewed).map((key) => (
					<RecentViewedItem
						key={key}
						statement={{
							...recentViewed[key].object,
							type: recentViewed[key].type,
							link:
								(recentViewed[key].type === 1 &&
									`/videos/${recentViewed[key].type_id}`) ||
								(recentViewed[key].type === 2 &&
									`/articles/${recentViewed[key].type_id}`) ||
								(recentViewed[key].type === 3 &&
									`/news/${recentViewed[key].type_id}`),
						}}
					/>
				))}
		</div>
	);
};

export default ProfileRecentViewed;
