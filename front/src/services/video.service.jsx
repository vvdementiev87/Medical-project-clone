import { axiosClassic } from '../api/interceptors';
import { getVideosUrl } from '../config/api.config';

export const VideoService = {
	async getAll(SearchTerm = null) {
		return axiosClassic.get(getVideosUrl(''), {
			params: SearchTerm ? { SearchTerm } : {},
		});
	},
};
