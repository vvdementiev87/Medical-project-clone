import Cookies from 'js-cookie';
import { getContentType } from '../../api/api.helpers';
import { axiosClassic } from '../../api/interceptors';
import { getAuthUrl } from '../../config/api.config';
import { removeTokensStorage, saveToStorage } from './auth.helpers';

export const AuthService = {
	async register(
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
		has_agreed
	) {
		const response = await axiosClassic.post(getAuthUrl('/register'), {
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
		});
		console.log(response);
		if (response?.data.accessToken) {
			saveToStorage(response.data);
		}
		return response;
	},

	async login(email, password) {
		const response = await axiosClassic.post(getAuthUrl('/login'), {
			email,
			password,
		});

		if (response?.data.accessToken) {
			console.log(response.data);
			saveToStorage(response?.data);
		}
		return response;
	},

	logout() {
		removeTokensStorage();
		localStorage.removeItem('user');
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken');
		const response = await axiosClassic.post(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		);
		if (response.data.accessToken) {
			saveToStorage(response.data);
		}

		return response;
	},

	async update(
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
		has_agreed
	) {
		const response = await axiosClassic.post(getAuthUrl('/user/update'), {
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
		console.log(response);
		if (response?.data.accessToken) {
			saveToStorage(response.data);
		}
		return response;
	},
	async resetPassword({ email, password, password_confirmation, token }) {
		console.log(email);
		const response = await axiosClassic.post(getAuthUrl('/reset-password'), {
			email,
			password,
			password_confirmation,
			token,
		});
		return response;
	},
	async getResetToken() {
		const response = await axiosClassic.get(getAuthUrl('/reset-password'));
		Cookies.set('resetPasswordToken', response.data?.resetPasswordToken);
		return response.data;
	},
};
