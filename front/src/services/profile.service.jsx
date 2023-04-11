import { axiosClassic } from '../api/interceptors';
import {
	getNotificationsUrl,
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
			return res.data;
		});
	},
	async getNotifications() {
		return axiosClassic.get(getNotificationsUrl('')).then((res) => {
			return res.data;
		});
	},
	async setNotifications() {
		return axiosClassic.get(getNotificationsUrl('/mark')).then((res) => {
			console.log(res.data);
			return res.data;
		});
	},
};
