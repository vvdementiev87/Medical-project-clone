import { axiosClassic } from '../api/interceptors';
import { getRecentViewedUrl } from '../config/api.config';

export const RecentViewedService = {
	async getRecentViewed() {
		return axiosClassic.get(getRecentViewedUrl('')).then((res) => {
			return res.data;
		});
	},
};
