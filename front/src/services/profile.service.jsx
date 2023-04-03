import { axiosClassic } from '../api/interceptors';
import {
	getRecentViewedUrl,
	getRecommendationsUrl,
} from '../config/api.config';

export const ProfileService = {
	async getRecentViewed() {
		return axiosClassic.get(getRecentViewedUrl('')).then((res) => {
			return res.data;
		});
	},
	async getRecommendations() {
		return axiosClassic.get(getRecommendationsUrl('')).then((res) => {
			console.log(res.data);
			return res.data;
		});
	},
};
