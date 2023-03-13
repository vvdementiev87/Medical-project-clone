import React from 'react';

import UserProfile from '../../components/UserProfile/UserProfile';
import { useAuth } from '../../hooks/useAuth';
import styles from './Profile.module.scss';

const Profile = () => {
	const { user } = useAuth();
	return (
		<div className={styles.profile}>
			<UserProfile user={{ ...user, avatar: 'imagesTest/avatar.jpg' }} />
		</div>
	);
};

export default Profile;
