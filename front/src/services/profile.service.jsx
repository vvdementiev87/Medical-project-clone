import { axiosClassic } from '../api/interceptors';
import {
	getNotificationsUrl,
	getRecentViewedUrl,
	getRecommendationsUrl,
} from '../config/api.config';
import { useAuth } from '../hooks/useAuth';

export const ProfileService = {
	async getRecentViewed() {
		return axiosClassic.get(getRecentViewedUrl('')).then((res) => {
			return res.data;
		});
	},
	async getRecommendations() {
		return axiosClassic.get(getRecommendationsUrl('')).then((res) => {
			return res.data;
		});
	},
	async getNotifications(id) {
		return axiosClassic.get(getNotificationsUrl(`/get/${id}`)).then((res) => {
			console.log(res);
			return res.data;
		});
	},
	async setNotifications(id) {
		return axiosClassic.get(getNotificationsUrl(`/read/${id}`)).then((res) => {
			console.log(res);
			return res.data;
		});
	},
};
