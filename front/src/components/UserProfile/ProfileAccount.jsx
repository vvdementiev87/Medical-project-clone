import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCsrfToken } from '../../api/interceptors';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import LoginButton from '../../ui/login-button/LoginButton';
import MaterialIcon from '../../ui/MaterialIcon';
import { dateFormater } from '../../utils/date-formater';
import ProfileFields from './ProfileFields';
import styles from './UserProfile.module.scss';

const ProfileAccount = () => {
	const { user, notifications } = useAuth();
	const { register, handleSubmit, formState, reset } = useForm({
		defaultValues: {
			first_name: user.first_name,
			last_name: user.last_name,
			surname: user.surname,
			email: user.email,
			phone: user.phone,
			address: user.address,
			birth_date: dateFormater(new Date(user.birth_date)),
			place_work: user.place_work,
			experience: user.experience,
			position: user.position,
			category: user.category,
			education: user.education,
			other_info: user.other_info,
		},
	});
	const [isDisabled, setIsDisabled] = useState(true);
	const { update, getNotifications } = useActions();
	useEffect(() => {
		getNotifications();
	}, []);

	const handleClick = () => {
		setIsDisabled(!isDisabled);
	};
	const onSubmit = async (data) => {
		await getCsrfToken();
		console.log(data);
		update(data);
		setIsDisabled(!isDisabled);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.back}>
				{Object.values(notifications).some((v) => v.status === 'sent') && (
					<div className={styles.message} title={'Новые сообщения'}>
						<MaterialIcon name={'MdMessage'} />
					</div>
				)}

				{isDisabled && (
					<LoginButton
						type={null}
						title={<MaterialIcon name={'MdEditDocument'} />}
						handleClick={handleClick}
					/>
				)}
			</div>

			<form className={styles.data} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.img}>
					<img
						className={styles.avatar}
						src={'imagesTest/avatar.jpg'} //user.avatar
						alt={user.first_name}
					/>
				</div>
				<ProfileFields
					isDisabled={isDisabled}
					formState={formState}
					register={register}
					user={user}
				/>
				{!isDisabled && (
					<div className={styles.buttonBottom}>
						<LoginButton
							type={null}
							title={<MaterialIcon name={'MdClose'} />}
							handleClick={handleClick}
						/>
						<LoginButton
							type={'submit'}
							title={<MaterialIcon name={'MdSave'} />}
							handleClick={isDisabled ? handleClick : handleSubmit(onSubmit)}
						/>
					</div>
				)}
			</form>
		</div>
	);
};

export default ProfileAccount;
