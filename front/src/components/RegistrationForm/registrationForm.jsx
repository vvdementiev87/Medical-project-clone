import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCsrfToken } from '../../api/interceptors';
import { hashedPassword } from '../../config/password.config';

import { useActions } from '../../hooks/useActions';
import { InputField } from '../basic/InputField/InputField';

function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: 'all' });
	const { register: registerAction } = useActions();
	const [responseError, setResponseError] = useState(null);

	const onSubmit = async (data) => {
		await getCsrfToken();
		console.log(data);
		const {
			password_confirmation,
			email,
			password,
			address,
			sign_for_news,
			position,
			phone,
			surname,
			other_info,
			last_name,
			first_name,
			experience,
			education,
			place_work,
			category,
			birth_date,
			has_agreed,
		} = data;

		try {
			registerAction({
				password_confirmation: hashedPassword(password_confirmation),
				email,
				password: hashedPassword(password),
				address,
				sign_for_news,
				position,
				phone,
				surname,
				other_info,
				last_name,
				first_name,
				experience,
				education,
				place_work,
				category,
				birth_date,
				has_agreed,
			});
		} catch (error) {
			setResponseError(error.response.data.errors);
		}

		//reset();
	};

	return (
		<form className="reg_form" data-testid="registration-form">
			<div className="reg_frame">
				<InputField
					className="reg_field_width"
					id="last_name"
					name="last_name"
					placeholder="Петров"
					labelText="Фамилия"
					error={errors['last_name']}
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
					error={errors['first_name']}
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
					error={errors.patronym}
					{...register('surname', {
						required: { value: true, message: 'Укажите отчество' },
					})}
				/>
				<InputField
					className="reg_field_width"
					id="birth_date"
					data-testid="birth_date"
					name="birth_date"
					placeholder="01.01.1977"
					type="date"
					labelText="Дата рождения"
					error={errors['birth_date']}
					{...register('birth_date', {
						required: { value: true, message: 'Укажите дату рождения' },
					})}
				/>
				<InputField
					className="reg_field_width"
					id="email"
					name="email"
					placeholder="example@mail.com"
					type="email"
					labelText="Email"
					error={errors.email}
					{...register('email', {
						required: { value: true, message: 'Укажите email' },
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Введите корректный email',
						},
					})}
				/>
				<InputField
					className="reg_field_width"
					id="phone"
					name="phone"
					placeholder="+375..."
					type="tel"
					labelText="Телефон в международном формате"
					{...register('phone')}
				/>

				<label>
					Aдрес, включая почтовый индекс
					<textarea
						className="reg_field_width"
						id="address"
						name="address"
						placeholder="..."
						aria-label="address"
						{...register('address')}
					/>
				</label>
				<InputField
					className="reg_field_width"
					id="place_work"
					name="place_work"
					placeholder="..."
					labelText="Место работы"
					{...register('place_work')}
				/>
				<InputField
					className="reg_field_width"
					id="position"
					name="position"
					placeholder="..."
					labelText="Должность"
					error={errors.position}
					{...register('position', {
						required: { value: true, message: 'Укажите должность' },
					})}
				/>
				<InputField
					className="reg_field_width"
					id="category"
					name="category"
					placeholder="..."
					labelText="Категория"
					{...register('category')}
				/>
				<InputField
					className="reg_field_width"
					id="experience"
					name="experience"
					placeholder="..."
					type="number"
					labelText="Стаж"
					{...register('experience')}
				/>

				<label>
					Профессиональное образование: учебное заведение и год его окончания
					<textarea
						className="reg_field_width"
						id="education"
						name="education"
						aria-label="education"
						placeholder="..."
						{...register('education')}
					/>
				</label>

				<label>
					Дополнительная информация (докторантура, аспирантура, ученая степень,
					прочее)
					<textarea
						className="reg_field_width"
						id="other_info"
						name="other_info"
						placeholder="..."
						aria-label="other_info"
						{...register('other_info')}
					/>
				</label>

				<InputField
					className="reg_field_width"
					id="password"
					data-testid="password"
					name="password"
					type="password"
					labelText="Пароль"
					error={errors.password}
					{...register('password', {
						required: { value: true, message: 'Укажите пароль' },
						minLength: {
							value: 6,
							message: 'Пароль должен быть не меньше 6 символов',
						},
					})}
				/>
				<InputField
					className="reg_field_width"
					id="password_confirmation"
					data-testid="ppassword_confirmation"
					name="password_confirmation"
					type="password"
					labelText="Подтвердите пароль"
					error={errors.password}
					{...register('password_confirmation', {
						required: { value: true, message: 'Укажите пароль' },
						minLength: {
							value: 6,
							message: 'Пароль должен быть не меньше 6 символов',
						},
					})}
				/>

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
						Данной отметкой Вы подтверждаете, что изучили и принимаете{' '}
						<a href="/signup">Правила сайта</a>
					</span>
					<input
						id="has_agreed"
						name="has_agreed"
						type="checkbox"
						aria-label="has_agreed"
						{...register('has_agreed')}
					/>
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
