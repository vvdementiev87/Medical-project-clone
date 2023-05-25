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
import { optionList } from '../RegistrationForm/registrationForm';
const ProfileAccount = () => {
	const { user, notifications } = useAuth();
	console.log(user);
	const { register, handleSubmit, formState, reset, control } = useForm({
		defaultValues: {
			first_name: user.first_name,
			last_name: user.last_name,
			surname: user.surname,
			email: user.email,
			phone: user.phone,
			address: user.address,
			birth_date: dateFormater(new Date(user.birth_date)),
			company: user.company,
			experience: user.experience,
			education: user.education,
			education_end: dateFormater(new Date(user.education_end)),
			specialization: user.specialization,
			degree: user.degree,
			academic_rank: user.academic_rank,
			position: user.position,
			education: user.education,
			interests: optionList.filter((item) =>
				user.interests.split(', ').includes(item.value)
			),
			sign_for_news: user.sign_for_news,
		},
	});
	const [isDisabled, setIsDisabled] = useState(true);
	const { update, getNotifications } = useActions();
	useEffect(() => {
		getNotifications({ id: user.id });
	}, []);

	const handleClick = () => {
		setIsDisabled(!isDisabled);
	};
	const onSubmit = async (data) => {
		await getCsrfToken();
		console.log(data);
		await update(data);
		setIsDisabled(!isDisabled);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.back}>
				{user?.role.some(item => item.id === 4)&&<div className={styles.message} title={'Новые сообщения'}>
						<p>Оплатите членские взносы</p>
					</div>}
				{Object.values(notifications).some((v) => v.read_at === null) && (
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
					control={control}
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
							handleClick={handleSubmit(onSubmit)}
						/>
					</div>
				)}
			</form>
		</div>
	);
};

export default ProfileAccount;
