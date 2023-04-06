import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';
import { getCsrfToken } from '../../api/interceptors';
import { hashedPassword } from '../../config/password.config';
import { useAuth } from '../../hooks/useAuth';
import { AuthService } from '../../services/auth/auth.service';
import { InputField } from '../basic/InputField/InputField';
import styles from './UserProfile.module.scss';

const ProfilePasswordChange = () => {
	const { user } = useAuth();
	const [isVisible, setIsVisible] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: 'all' });
	const [responseError, setResponseError] = useState(null);

	const onSubmit = async (data) => {
		setResponseError(null);
		await getCsrfToken();
		const { password, password_confirmation } = data;
		try {
			AuthService.resetPassword({
				email: user.email,
				password: hashedPassword(password),
				password_confirmation: hashedPassword(password_confirmation),
				token: Cookies.get('resetPasswordToken'),
			});
			toastr.success('Password changed', 'Completed successfully');
			setIsVisible(!isVisible);
			Cookies.remove('resetPasswordToken');
		} catch (error) {
			setResponseError(error.response.data.errors);
		}
		reset();
	};

	return isVisible ? (
		!responseError ? (
			<div className={styles.formContainer}>
				<h3>Форма смены пароля</h3>
				<form
					className={styles.form}
					data-testid="login-form"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div
						className={styles.closeBtn}
						onClick={() => setIsVisible(!isVisible)}
					>
						x
					</div>
					<div className={styles.frame}>
						<InputField
							className="login_field_width"
							id="password"
							name="password"
							type="password"
							labelText="Новый пароль"
							error={errors.password}
							{...register('password', {
								required: { value: true, message: 'Заполните поле пароль' },
								minLength: {
									value: 6,
									message: 'Пароль должен быть не меньше 6 символов',
								},
							})}
						/>
						<InputField
							className="login_field_width"
							id="password_confirmation"
							name="password_confirmation"
							type="password"
							labelText="Подтвердите пароль"
							error={errors.password_confirmation}
							{...register('password_confirmation', {
								required: { value: true, message: 'Заполните поле пароль' },
								minLength: {
									value: 6,
									message: 'Пароль должен быть не меньше 6 символов',
								},
							})}
						/>
						<button className={styles.resetBtn} type="submit">
							Войти
						</button>
					</div>
				</form>
			</div>
		) : (
			<p>{responseError}</p>
		)
	) : (
		<div className={styles.formContainer}>
			<h3>Подтвердите смену пароля</h3>
			<button
				className={styles.resetBtn}
				onClick={async () => {
					await AuthService.getResetToken();
					setIsVisible(!isVisible);
				}}
			>
				Сменить пароль
			</button>
		</div>
	);
};

export default ProfilePasswordChange;
