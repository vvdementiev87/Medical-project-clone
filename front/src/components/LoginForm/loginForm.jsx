import React from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../basic/InputField/InputField';
import { getCsrfToken } from '../../api/interceptors';

import { useActions } from '../../hooks/useActions';
import { useState } from 'react';
import { hashedPassword } from '../../config/password.config';

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: 'all' });
	const [responseError, setResponseError] = useState(null);
	const { login: loginAction } = useActions();

	const onSubmit = async (data) => {
		setResponseError(null);
		await getCsrfToken().then((res) => console.log(res.headers));
		const { email, password } = data;
		try {
			loginAction({ email, password: hashedPassword(password) });
		} catch (error) {
			setResponseError(error.response.data.errors);
		}
		reset();
	};

	return (
		<form
			className="login_form"
			data-testid="login-form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="login_frame">
				<InputField
					className="login_field_width"
					id="email"
					name="email"
					labelText="Email"
					placeholder="example@mail.com"
					error={errors.email || responseError}
					{...register('email', {
						required: { value: true, message: 'Заполните поле email' },
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Введите корректный email',
						},
					})}
				/>
				<InputField
					className="login_field_width"
					id="password"
					name="password"
					type="password"
					labelText="Пароль"
					error={errors.password}
					{...register('password', {
						required: { value: true, message: 'Заполните поле пароль' },
						minLength: {
							value: 6,
							message: 'Пароль должен быть не меньше 6 символов',
						},
					})}
				/>
				<input className="login_btn" type="submit" value="Войти" />
			</div>
		</form>
	);
}

export default LoginForm;
