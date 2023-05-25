import React, { useState } from 'react';
import { getCsrfToken } from '../../api/interceptors';
import { useActions } from '../../hooks/useActions';
import { InputField } from '../basic/InputField/InputField';
import { TextAreaField } from '../basic/TextAreaField/TextAreaField';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
export const optionList = [
	{
		value: 'Организация и менеджмент симуляционного центра',
		label: 'Организация и менеджмент симуляционного центра',
	},
	{ value: 'Кардиология', label: 'Кардиология' },
	{ value: 'Междисциплинарный тренинг', label: 'Междисциплинарный тренинг' },
	{
		value: 'Стандартизированный пациент',
		label: 'Стандартизированный пациент',
	},
	{ value: 'Коммуникативные навыки', label: 'Коммуникативные навыки' },
	{
		value: 'Виртуальные и дистанционные технологии',
		label: 'Виртуальные и дистанционные технологии',
	},
	{
		value: 'Фирмы, изделия, производства',
		label: 'Фирмы, изделия, производства',
	},
	{
		value: 'Организация здравоохранения',
		label: 'Организация здравоохранения',
	},
	{
		value: 'Диагностика инструментальная',
		label: 'Диагностика инструментальная',
	},
	{ value: 'Акушерство и гинекология', label: 'Акушерство и гинекология' },
	{
		value: 'Анестезиология и реаниматология',
		label: 'Анестезиология и реаниматология',
	},
	{ value: 'Неотложная помощь', label: 'Неотложная помощь' },
	{ value: 'Офтальмология', label: 'Офтальмология' },
	{ value: 'Оториноларингология', label: 'Оториноларингология' },
	{ value: 'Неврология и нейрохирургия', label: 'Неврология и нейрохирургия' },
	{ value: 'Педиатрия и неонатология', label: 'Педиатрия и неонатология' },
	{ value: 'Сестринское дело, уход', label: 'Сестринское дело, уход' },
	{ value: 'Стоматология', label: 'Стоматология' },
	{ value: 'Терапия', label: 'Терапия' },
	{ value: 'Травматология и ортопедия', label: 'Травматология и ортопедия' },
	{ value: 'Челюстно-лицевая хирургия', label: 'Челюстно-лицевая хирургия' },
	{ value: 'Урология', label: 'Урология' },
	{ value: 'Хирургия', label: 'Хирургия' },
	{ value: 'Эндовидеохирургия', label: 'Эндовидеохирургия' },
	{ value: 'Другое', label: 'Другое' },
];

export const customStyles = {
	control: (styles, state) => ({
		...styles,
		boxShadow: state.isFocused ? '0 0 0 0.1rem rgba(120, 194, 173, 0.25)' : 0,
		border: state.isFocused
			? '2px solid #D0EAE2'
			: '2px solid rgba(68, 68, 167, 0.3)',
		'&:hover': {
			borderColor: state.isFocused ? '#D0EAE2' : '#CED4DA',
		},
	}),
};

export const customStylesError = {
	control: (styles, state) => ({
		...styles,
		borderColor: 'red',
		border: state.isFocused ? '2px solid red' : '2px solid red',
		boxShadow: state.isFocused ? '0 0 0 red' : 0,
		'&:hover': {
			borderColor: 'red',
		},
	}),
};

function RegistrationForm() {
	const { register, handleSubmit, formState, reset, control } = useForm({
		mode: 'all',
	});
	const { register: registerAction } = useActions();
	const [responseError, setResponseError] = useState(null);
	const [selectedOptions, setSelectedOptions] = useState(null);
	const [checked, setChecked] = useState(false);
	console.log(formState);

	const onSubmit = async (data) => {
		await getCsrfToken();
		console.log(data);
		const {
			// password_confirmation,
			email,
			// password,
			address,
			sign_for_news,
			position,
			phone,
			surname,
			// other_info,
			last_name,
			first_name,
			experience,
			education,
			education_end,
			company,
			// category,
			birth_date,
			specialization,
			degree,
			academic_rank,
			interests,
			is_other_organization,
			is_member,
			has_agreed,
		} = data;

		try {
			registerAction({
				// password_confirmation: hashedPassword(password_confirmation),
				email,
				// password: hashedPassword(password),
				address,
				sign_for_news,
				position,
				phone,
				surname,
				// other_info,
				last_name,
				first_name,
				experience,
				education,
				education_end,
				company,
				// category,
				birth_date,
				specialization,
				degree,
				academic_rank,
				interests,
				is_other_organization,
				is_member,
				has_agreed,
			});
		} catch (error) {
			setResponseError(error.response.data.errors);
		}
		// reset();
	};

	function changeCheckbox() {
		setChecked(!checked);
	}

	return (
		<form className="reg_form" data-testid="registration-form">
			<div className="reg_frame">
				<InputField
					className="reg_field_width"
					id="last_name"
					name="last_name"
					custom_required={true}
					placeholder="Петров"
					labelText="Фамилия"
					error={formState.errors['last_name']}
					{...register('last_name', {
						required: { value: true, message: 'Укажите фамилию' },
					})}
				/>
				<InputField
					className="reg_field_width"
					id="first_name"
					name="first_name"
					placeholder="Петр"
					labelText="Имя"
					custom_required={true}
					error={formState.errors['first_name']}
					{...register('first_name', {
						required: { value: true, message: 'Укажите имя' },
					})}
				/>
				<InputField
					className="reg_field_width"
					id="surname"
					name="surname"
					placeholder="Петрович"
					labelText="Отчество"
					error={formState.errors.surname}
					{...register('surname')}
				/>
				<InputField
					className="reg_field_width"
					id="birth_date"
					data-testid="birth_date"
					name="birth_date"
					placeholder="01.01.1977"
					type="date"
					labelText="Дата рождения"
					error={formState.errors['birth_date']}
					custom_required={true}
					{...register('birth_date', {
						required: { value: true, message: 'Укажите дату рождения' },
					})}
				/>

				<InputField
					className="reg_field_width"
					id="phone"
					name="phone"
					placeholder="+375..."
					error={formState.errors['phone']}
					type="tel"
					labelText="Телефон в международном формате"
					custom_required={true}
					{...register('phone', {
						required: { value: true, message: 'Укажите телефон' },
					})}
				/>

				<InputField
					className="reg_field_width"
					id="email"
					name="email"
					placeholder="example@mail.com"
					type="email"
					labelText="Email"
					error={formState.errors.email}
					custom_required={true}
					{...register('email', {
						required: { value: true, message: 'Укажите email' },
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Введите корректный email',
						},
					})}
				/>

				<TextAreaField
					className="reg_field_width"
					id="address"
					name="address"
					labelText="Aдрес, включая почтовый индекс"
					placeholder="..."
					error={formState.errors['address']}
					custom_required={true}
					aria-label="address"
					{...register('address', {
						required: { value: true, message: 'Укажите адрес' },
					})}
				/>

				<TextAreaField
					className="reg_field_width"
					id="education"
					name="education"
					aria-label="education"
					labelText="Профессиональное образование: учебное заведение"
					error={formState.errors['education']}
					custom_required={true}
					placeholder="..."
					{...register('education', {
						required: { value: true, message: 'Укажите учебное заведение' },
					})}
				/>

				<InputField
					className="reg_field_width"
					id="education_end"
					name="education_end"
					placeholder="..."
					labelText="Год окончания учебного заведения"
					error={formState.errors['education_end']}
					custom_required={true}
					{...register('education_end', {
						required: {
							value: true,
							message: 'Укажите год окончания учебного заведения',
						},
					})}
				/>

				<InputField
					className="reg_field_width"
					id="specialization"
					name="specialization"
					placeholder="..."
					error={formState.errors['specialization']}
					labelText="Специальность"
					custom_required={true}
					{...register('specialization', {
						required: { value: true, message: 'Укажите специальность' },
					})}
				/>

				<InputField
					className="reg_field_width"
					id="experience"
					name="experience"
					placeholder="..."
					type="number"
					error={formState.errors['experience']}
					custom_required={true}
					labelText="Стаж работы в специальности"
					{...register('experience', {
						required: { value: true, message: 'Укажите ваш стаж' },
					})}
				/>

				<InputField
					className="reg_field_width"
					id="company"
					name="company"
					placeholder="..."
					error={formState.errors['company']}
					custom_required={true}
					labelText="Место работы"
					{...register('company', {
						required: { value: true, message: 'Укажите место работы' },
					})}
				/>

				<InputField
					className="reg_field_width"
					id="position"
					name="position"
					placeholder="..."
					labelText="Должность"
					custom_required={true}
					error={formState.errors.position}
					{...register('position', {
						required: { value: true, message: 'Укажите должность' },
					})}
				/>

				<InputField
					className="reg_field_width"
					id="degree"
					name="degree"
					placeholder="..."
					labelText="Ученая степень"
					error={formState.errors.degree}
					{...register('degree')}
				/>

				<InputField
					className="reg_field_width"
					id="academic_rank"
					name="academic_rank"
					placeholder="..."
					labelText="Ученое звание"
					error={formState.errors.academic_rank}
					{...register('academic_rank')}
				/>

				<Controller
					id="interests"
					name="interests"
					labelText="Область профессиональных интересов"
					custom_required={true}
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value, name, ref } }) => {
						return (
							<label>
								{'Область профессиональных интересов'}
								<span className="custom_required ms-1">*</span>
								<Select
									options={optionList}
									onChange={onChange}
									isMulti={true}
									s
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
				{formState.errors.interests && selectedOptions.length < 1 && (
					<span
						className={`input_field_text_error mt-negative-15`}
						data-testid="input-error"
						role="alert"
					>
						{'Укажите ваш профессиональный интерес'}
					</span>
				)}

				<label>
					<span className="reg_checkbox_text">
						Являетесь ли членом других общественных объединений
					</span>
					<input
						id="is_member"
						name="is_member"
						type="checkbox"
						aria-label="is_member"
						onClick={() => setChecked((prev) => !checked)}
						{...register('is_member')}
					/>
				</label>

				{checked && (
					<InputField
						className="reg_field_width"
						id="is_other_organization"
						name="is_other_organization"
						aria-label="is_other_organization"
						labelText="Название обшественного объединения"
						defaultValue=""
						error={formState.errors['is_other_organization']}
						placeholder="..."
						custom_required={true}
						{...register('is_other_organization', {
							required: { value: true, message: 'Необходимо заполнить поле' },
						})}
					/>
				)}

				<label>
					<span className="reg_checkbox_text">
						Являетесь ли членом других общественных объединений
					</span>
                    <input
                        id="is_member"
                        name="is_member"
                        type="checkbox"
                        aria-label="is_member"
                        onClick={() => setChecked(prev=>!checked)}
                        {...register('is_member')}
                    />
                </label>

                {checked&&
                 <InputField
                     className="reg_field_width"
                     id="is_other_organization"
                     name="is_other_organization"
                     aria-label="is_other_organization"
                     labelText="Название обшественного объединения"
                     defaultValue=""
                     error={errors['is_other_organization']}
                     placeholder="..."
                     custom_required={true}
                     {...register('is_other_organization', {
                         required: {value: true, message: 'Необходимо заполнить поле'},
                     })}
                 />}


                <label>
					<span className="reg_checkbox_text">
						Хотите ли Вы получать наши новости себе на почту?
					</span>
					<input
						id="sign_for_news"
						name="sign_for_news"
						type="checkbox"
						aria-label="sign_for_news"
						{...register('sign_for_news')}
					/>
				</label>

				<label>
					<span className="reg_checkbox_text">
						<span className="custom_required">*</span> Данной отметкой Вы
						подтверждаете, что изучили и принимаете{' '}
						<a href="/statute">Устав общества</a>
					</span>
					<input
						id="has_agreed"
						name="has_agreed"
						type="checkbox"
						aria-label="has_agreed"
						{...register('has_agreed', {
							required: { value: true, message: 'Заполните все поля' },
						})}
					/>
					{formState.errors.has_agreed && (
						<span
							className={`input_field_text_error`}
							data-testid="input-error"
							role="alert"
						>
							{'Заполните все поля'}
						</span>
					)}
				</label>
				<input
					className="reg_btn"
					name="submit"
					type="submit"
					onClick={handleSubmit(onSubmit)}
				/>
			</div>
		</form>
	);
}

export default RegistrationForm;

{
	/*<InputField*/
}
{
	/*	className="reg_field_width"*/
}
{
	/*	id="password"*/
}
{
	/*	data-testid="password"*/
}
{
	/*	name="password"*/
}
{
	/*	type="password"*/
}
{
	/*	labelText="Пароль"*/
}
{
	/*	error={errors.password}*/
}
{
	/*	{...register('password', {*/
}
{
	/*		required: { value: true, message: 'Укажите пароль' },*/
}
{
	/*		minLength: {*/
}
{
	/*			value: 6,*/
}
{
	/*			message: 'Пароль должен быть не меньше 6 символов',*/
}
{
	/*		},*/
}
{
	/*	})}*/
}
{
	/*/>*/
}
{
	/*<InputField*/
}
{
	/*	className="reg_field_width"*/
}
{
	/*	id="password_confirmation"*/
}
{
	/*	data-testid="password_confirmation"*/
}
{
	/*	name="password_confirmation"*/
}
{
	/*	type="password_confirmation"*/
}
{
	/*	labelText="Подтвердите пароль"*/
}
{
	/*	error={errors.password}*/
}
{
	/*	{...register('password_confirmation', {*/
}
{
	/*		required: { value: true, message: 'Укажите пароль' },*/
}
{
	/*		minLength: {*/
}
{
	/*			value: 6,*/
}
{
	/*			message: 'Пароль должен быть не меньше 6 символов',*/
}
{
	/*		},*/
}
{
	/*	})}*/
}
{
	/*/>*/
}
