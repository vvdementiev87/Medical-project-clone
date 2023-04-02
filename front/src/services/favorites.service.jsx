import { axiosClassic } from '../api/interceptors';
import { getFavoritesUrl } from '../config/api.config';

export const FavoritesService = {
	async addFavorite({ type_id, type, user_id }) {
		return axiosClassic
			.post(getFavoritesUrl(`/add`), { type_id, type, user_id })
			.then((res) => {
				return res.data;
			});
	},
	async getFavorite(user_id) {
		return axiosClassic.post(getFavoritesUrl(''), { user_id }).then((res) => {
			return res.data;
		});
	},
	async checkFavorite({ type_id, type, user_id }) {
		return axiosClassic
			.post(getFavoritesUrl('/check'), { type_id, type, user_id })
			.then((res) => {
				return res.data?.favorite;
			});
	},
	async deleteFavorite({ type_id, type, user_id }) {
		return axiosClassic
			.post(getFavoritesUrl('/delete'), { type_id, type, user_id })
			.then((res) => {
				return res.data?.favorite;
			});
	},
};
