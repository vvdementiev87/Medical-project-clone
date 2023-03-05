import React from 'react';

import UserProfile from '../../components/UserProfile/UserProfile';
import styles from './Profile.module.scss';

const user = {
	avatar: 'imagesTest/avatar.jpg',
	first_name: 'John',
	patronym: 'Johnson',
	last_name: 'Doe',
	birth_date: '1990-01-01',
	email: 'envkt@example.com',
	phone: '0123456789',
	address: 'Russia, 1234 Main St',
	company: 'Company',
	position: 'Software Engineer',
	category: 'Software Engineer',
	experience: '2020-01-01',
	education: 'education',
	other_info: 'other info',
	sign_for_news: true,
	has_agreed: true,
};

const Profile = () => {
	return (
		
			
			<div className={styles.profile}>
				<UserProfile user={user} />
			</div>
			
		
	);
};

export default Profile;
