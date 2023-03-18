import RegistrationForm from '../../components/RegistrationForm/registrationForm';
import './Registration.scss';

function Registration() {
	return (
		<div className="container">
			<h2 className="reg_title">Онлайн-заявка на регистрацию</h2>
			<RegistrationForm />
		</div>
	);
}

export default Registration;
