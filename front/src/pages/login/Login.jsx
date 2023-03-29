import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/loginForm';
import { routes } from '../../routes/route';
import './Login.scss';

export function Login() {
	//здесь будет логика проверки токена сессии
	const isAuth = false;

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Логика выхода');
	};

	return (
		<div className="container">
			{isAuth ? (
				<div className="login_container">
					<h2 className="login_title">Выход</h2>
					<p>Вы уверены, что хотите выйти?</p>
					<input
						className="login_btn"
						type="submit"
						value="Выйти"
						onClick={handleSubmit}
					/>
				</div>
			) : (
				<div className="login_container">
					<h2 className="login_title">Вход</h2>
					<LoginForm />
					<p className="login_text">
						Если Вы не зарегистрированы, пожалуйста, заполните{' '}
						<Link to={routes.REGISTER.link}>форму регистрации</Link>.
					</p>
				</div>
			)}
		</div>
	);
}

export default Login;
