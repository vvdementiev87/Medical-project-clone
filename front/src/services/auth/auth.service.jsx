import Cookies from 'js-cookie';
import { getContentType } from '../../api/api.helpers';
import { axiosClassic } from '../../api/interceptors';
import { getAuthUrl } from '../../config/api.config';
import { removeTokensStorage, saveToStorage } from './auth.helpers';

export const AuthService = {
	async register(
		email,
		password,
		address,
		sign_for_news,
		position,
		phone,
		patronym,
		other_info,
		last_name,
		first_name,
		experience,
		education,
		company,
		category,
		birth_date
	) {
		const response = await axiosClassic.post(getAuthUrl('/register'), {
			email,
			password,
			address,
			sign_for_news,
			position,
			phone,
			patronym,
			other_info,
			last_name,
			first_name,
			experience,
			education,
			company,
			category,
			birth_date,
		});
		console.log(response);
		if (response.data.accessToken) {
			saveToStorage(response.data);
		}
		return response.data;
	},

	async login(email, password) {
		const response = await axiosClassic.post(getAuthUrl('/login'), {
			email,
			password,
		});
		if (response.data.accessToken) {
			saveToStorage(response.data);
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
};
