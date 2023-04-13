import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import InputForm from '../../ui/input-form/InputForm';
import MaterialIcon from '../../ui/MaterialIcon';
import { dateFormater } from '../../utils/date-formater';
import styles from './UserProfile.module.scss';
import Select from 'react-select';
import {
	optionList,
	customStyles,
	customStylesError,
} from '../RegistrationForm/registrationForm';
const ProfileFields = ({ isDisabled, formState, register, user, control }) => {
	const [selectedOptions, setSelectedOptions] = useState([]);

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
					defaultValue={user.education}
					placeholder={'Профессиональное образование: учебное заведение: '}
					error={formState.errors?.education}
					{...register('education', {
						required: 'Укажите учебное заведение',
						minLength: 2,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					placeholder={'Год окончания учебного заведения: '}
					type={'date'}
					className={styles.input}
					isDisabled={isDisabled}
					error={formState.errors?.education_end}
					defaultValue={dateFormater(new Date(user.education_end))}
					{...register('education_end', {
						required: 'Укажите год окончания учебного заведения',
						minLength: 2,
					})}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.specialization}
					placeholder={'Специальность: '}
					error={formState.errors?.specialization}
					{...register('specialization', {
						required: 'Укажите специальность',
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
					placeholder={'Стаж работы в специальности: '}
					error={formState.errors?.experience}
					{...register('experience', { required: 'Укажите опыт работы' })}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.company}
					placeholder={'Место работы: '}
					error={formState.errors?.company}
					{...register('company', {
						required: 'Укажите место работы',
						minLength: 2,
					})}
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
					defaultValue={user.degree}
					placeholder={'Ученая степень: '}
					error={formState.errors?.degree}
					{...register('degree')}
				/>
			</div>

			<div className={styles.phone}>
				<InputForm
					className={styles.input}
					isDisabled={isDisabled}
					defaultValue={user.academic_rank}
					placeholder={'Ученое звание: '}
					error={formState.errors?.academic_rank}
					{...register('academic_rank')}
				/>
			</div>
			<div className={styles.phone}>
				<InputForm
					disabled={isDisabled}
					id="sign_for_news"
					name="sign_for_news"
					type="checkbox"
					placeholder={'Подписка на новости: '}
					aria-label="sign_for_news"
					defaultValue={user.sign_for_news}
					{...register('sign_for_news')}
				/>
			</div>
			<div className={styles.phone} style={{ maxWidth: '500px' }}>
				<Controller
					id="interests"
					name="interests"
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value, name, ref } }) => {
						console.log(
							optionList.filter((item) =>
								user.interests.split(', ').includes(item.value)
							)
						);
						console.log(value);
						return (
							<label>
								{'Область профессиональных интересов'}
								<span className="custom_required ms-1">*</span>
								<Select
									isDisabled={isDisabled}
									options={optionList}
									onChange={onChange}
									isMulti={true}
									onBlur={onBlur}
									value={value}
									name={name}
									ref={ref}
									placeholder="..."
									isSearchable
									styles={
										!formState.errors.interests || selectedOptions.length > 0
											? customStyles
											: customStylesError
									}
									className="w-100 mt-2"
								/>
							</label>
						);
					}}
				/>
				{formState.errors.interests && (
					<span
						className={`input_field_text_error mt-negative-15`}
						data-testid="input-error"
						role="alert"
					>
						{'Укажите ваш профессиональный интерес'}
					</span>
				)}
			</div>
		</>
	);
};

export default ProfileFields;
