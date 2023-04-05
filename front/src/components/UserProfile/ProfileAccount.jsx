import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCsrfToken } from '../../api/interceptors';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import LoginButton from '../../ui/login-button/LoginButton';
import RecentViewed from '../RecentViewed/RecentViewed';
import ProfileFields from './ProfileFields';
import styles from './UserProfile.module.scss';

const ProfileAccount = () => {
	const { user } = useAuth();
	const { register, handleSubmit, formState, reset } = useForm();
	const [isDisabled, setIsDisabled] = useState(true);
	const { update } = useActions();

	const handleClick = () => {
		setIsDisabled(!isDisabled);
	};
	const onSubmit = async (data) => {
		await getCsrfToken();
		console.log(data);
		update(data);
		setIsDisabled(!isDisabled);
		reset();
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.back}></div>

			<form className={styles.data} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.img}>
					<img
						className={styles.avatar}
						src={'imagesTest/avatar.jpg'} //user.avatar
						alt={user.first_name}
					/>
					{/* <LoginButton
						type={isDisabled ? null : 'submit'}
						title={isDisabled ? 'Редактировать' : 'Сохранить'}
						handleClick={isDisabled ? handleClick : handleSubmit(onSubmit)}
					/> */}
				</div>
				<ProfileFields
					isDisabled={isDisabled}
					formState={formState}
					register={register}
					user={user}
				/>
			</form>
		</div>
	);
};

export default ProfileAccount;
