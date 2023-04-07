import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import styles from './UserProfile.module.scss';
import cn from 'classnames';
const ProfileMessages = () => {
	const { notifications } = useAuth();
	const { getNotifications, setNotifications } = useActions();
	useEffect(() => {
		getNotifications();
		return () => {
			Object.values(notifications).some((v) => v.status === 'sent') &&
				setNotifications();
		};
	}, []);
	console.log(notifications);
	return (
		<div className={styles.notifications}>
			{Object.keys(notifications).length > 0 &&
				Object.keys(notifications).map((key) => (
					<div
						className={cn(styles.item, {
							[styles.item_sent]: notifications[key].status === 'sent',
						})}
						key={key}
					>
						<p>{notifications[key].message}</p>

						<span>{notifications[key]?.created_at}</span>
					</div>
				))}
		</div>
	);
};

export default ProfileMessages;
