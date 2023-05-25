import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import styles from './UserProfile.module.scss';
import cn from 'classnames';
import { dateFormater, dateFormaterWithTime } from '../../utils/date-formater';
const ProfileMessages = () => {
	const { user, notifications } = useAuth();
	const { getNotifications, setNotifications } = useActions();
	useEffect(() => {
		getNotifications({ id: user.id });
		return () => {
			Object.values(notifications).some((v) => v.read_at === null) &&
				setNotifications({ id: user.id });
		};
	}, []);
	console.log(notifications);
	return (
		<div className={styles.notifications}>
			{Object.keys(notifications).length > 0 &&
				Object.keys(notifications).map((key) => (
					<div
						className={cn(styles.item, {
							[styles.item_sent]: notifications[key].read_at === null,
						})}
						key={key}
					>
						<p>{notifications[key].data.data}</p>

						<span>
							{dateFormaterWithTime(new Date(notifications[key]?.created_at))}
						</span>
					</div>
				))}
		</div>
	);
};

export default ProfileMessages;
