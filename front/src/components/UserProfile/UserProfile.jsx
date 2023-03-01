import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginButton from '../../ui/login-button/LoginButton';
import Favorites from '../Favorites/Favorites';
import RecentViewed from '../RecentViewed/RecentViewed';
import ProfileFields from './ProfileFields';
import styles from './UserProfile.module.scss';

const UserProfile = ({ user }) => {
	const { register, handleSubmit, formState, reset } = useForm();
	const [updatedUser, setUpdatedUser] = useState(user);
	const [isDisabled, setIsDisabled] = useState(true);

	const handleClick = () => {
		setIsDisabled(!isDisabled);
	};
	const onSubmit = (data) => {
		console.log(formState.errors);
		console.log(data);
		setUpdatedUser(data);
		console.log(updatedUser);
		setIsDisabled(!isDisabled);
		reset();
	};
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.back}></div>

					<form className={styles.data} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.img}>
							<img
								className={styles.avatar}
								src={user.avatar}
								alt={user.first_name}
							/>
							<LoginButton
								type={isDisabled ? null : 'submit'}
								title={isDisabled ? 'Редактировать' : 'Сохранить'}
								handleClick={isDisabled ? handleClick : handleSubmit(onSubmit)}
							/>
						</div>
						<ProfileFields
							isDisabled={isDisabled}
							formState={formState}
							register={register}
							user={updatedUser}
						/>
					</form>
				</div>
				<div className={styles.wrapper}>
					<RecentViewed />
				</div>
			</div>
			<div className={styles.sidebar}>
				<Favorites />
			</div>
		</div>
	);
};

export default UserProfile;

/*
	
	sign_for_news: true,
	has_agreed: true, */
