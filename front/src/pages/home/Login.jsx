import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm";
import "../../assets/styles/Login.css";

export function Login() {
    //здесь будет логика проверки токена сессии
    const isAuth = false;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Логика выхода");
    }

    return <>
        {isAuth ?
            <div>
                <h2 className="reg_title">Выход</h2>
                <p>Вы уверены, что хотите выйти?</p>
                <input className="login_btn" type="submit" value="Выйти" onClick={handleSubmit} />
            </div>
            :
            <div>
                <h2 className="reg_title">Вход</h2>
                <LoginForm />
                <p>Если Вы не зарегистрированы, пожалуйста, заполните <Link to={'/signup'}>форму регистрации</Link>.</p>
            </div>
        }
    </>
}

export default Login;