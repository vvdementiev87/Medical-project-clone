import React from 'react';
import InputForm from '../../ui/input-form/InputForm';
import MaterialIcon from '../../ui/MaterialIcon';
import { dateFormater } from '../../utils/date-formater';
import styles from './UserProfile.module.scss';
const ProfileFields = ({ isDisabled, formState, register, user }) => {
	console.log(formState);
	return (
		<>
			<div className={styles.name}>
				<InputForm
					title={'Фамилия'}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.first_name}
					error={formState.errors?.first_name}
					{...register('first_name', {
						required: 'Введите фамилию',
						minLength: 1,
					})}
				/>
				<InputForm
					title={'Имя'}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.last_name}
					error={formState.errors?.last_name}
					{...register('last_name', { required: 'Введите имя', minLength: 1 })}
				/>
				<InputForm
					title={'Отчество'}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.surname}
					error={formState.errors?.surname}
					{...register('surname', {
						required: 'Введите отчество',
						minLength: 1,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					title={'Email'}
					placeholder={<MaterialIcon name={'MdOutlineEmail'} />}
					className={styles.input}
					type={'email'}
					isDisabled={true}
					defaultValue={user.email}
					error={formState.errors?.email}
				/>
				<InputForm
					title={'Номер телефона'}
					placeholder={<MaterialIcon name={'MdLocalPhone'} />}
					className={styles.input}
					type={'tel'}
					isDisabled={isDisabled}
					defaultValue={user.phone}
					error={formState.errors?.phone}
					{...register('phone', {
						pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					title={'Адрес'}
					placeholder={<MaterialIcon name={'MdLocationOn'} />}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.address}
					error={formState.errors?.address}
					{...register('address', { required: 'Укажите адрес', minLength: 2 })}
				/>
			</div>

			<div className={styles.phone}>
				<InputForm
					placeholder={'Дата рождения: '}
					type={'date'}
					className={styles.input}
					isDisabled={isDisabled}
					error={formState.errors?.birth_date}
					defaultValue={dateFormater(new Date(user.birth_date))}
					{...register('birth_date', {
						required: 'Укажите дату рождения',
						minLength: 2,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.place_work}
					placeholder={'Компания: '}
					error={formState.errors?.place_work}
					{...register('place_work', {
						required: 'Укажите место работы',
						minLength: 2,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					type={'number'}
					defaultValue={user.experience}
					placeholder={'Опыт: '}
					error={formState.errors?.experience}
					{...register('experience', { required: 'Укажите опыт работы' })}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.position}
					placeholder={'Должность: '}
					error={formState.errors?.position}
					{...register('position', {
						required: 'Укажите должность',
						minLength: 2,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.category}
					placeholder={'Категория: '}
					error={formState.errors?.category}
					{...register('category', {
						required: 'Укажите категорию',
						minLength: 2,
					})}
				/>
			</div>

			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.education}
					placeholder={'Образование: '}
					error={formState.errors?.education}
					{...register('education', {
						required: 'Укажите образование',
						minLength: 2,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					id={'other_info'}
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.other_info}
					error={formState.errors?.other_info}
					placeholder={'Дополнительная информация: '}
					{...register('other_info')}
				/>
			</div>
		</>
	);
};

export default ProfileFields;
