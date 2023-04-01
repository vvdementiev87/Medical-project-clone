import React from 'react';
import InputForm from '../../ui/input-form/InputForm';
import { dateFormater } from '../../utils/date-formater';
import styles from './UserProfile.module.scss';
const ProfileFields = ({ isDisabled, formState, register, user }) => {
	return (
		<>
			<div className={styles.name}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.first_name}
					error={formState.errors.input}
					{...register('first_name', {
						required: 'Укажите имя',
					})}
				/>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.surname}
					{...register('surname', { required: true })}
				/>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.last_name}
					{...register('last_name', { required: true })}
				/>
			</div>
			<div className={styles.address}>
				<InputForm
					placeholder={'Адрес: '}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.address}
					{...register('address', { required: true })}
				/>
			</div>
			<div className={styles.address}>
				<InputForm
					placeholder={'Email: '}
					className={styles.input}
					type="email"
					isDisabled={true}
					defaultValue={user.email}
				/>
				<InputForm
					placeholder={'Телефон: '}
					className={styles.input}
					type="tel"
					isDisabled={isDisabled}
					defaultValue={user.phone}
					{...register('phone', { required: true })}
				/>
			</div>
			<div className={styles.address}>
				<InputForm
					placeholder={'Дата рождения: '}
					type={'date'}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={dateFormater(new Date(user.birth_date))}
					{...register('birth_date', { required: true })}
				/>
			</div>
			<div className={styles.address}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.place_work}
					placeholder={'Компания: '}
					{...register('place_work', { required: true })}
				/>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					type={'number'}
					defaultValue={user.experience}
					placeholder={'Опыт: '}
					{...register('experience', { required: true })}
				/>
			</div>
			<div className={styles.address}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.position}
					placeholder={'Должность: '}
					{...register('position', { required: true })}
				/>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.category}
					placeholder={'Категория: '}
					{...register('category', { required: true })}
				/>
			</div>
			<div className={styles.address}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.education}
					placeholder={'Образование: '}
					{...register('education', { required: true })}
				/>
			</div>
			<div className={`${styles.textarea} ${styles.address}`}>
				<InputForm
					id={'other_info'}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.other_info}
					placeholder={'Дополнительная информация: '}
					{...register('other_info', { required: true })}
				/>
			</div>
		</>
	);
};

export default ProfileFields;
