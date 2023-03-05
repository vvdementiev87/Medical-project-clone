import { axiosClassic } from '../api/interceptors';
import { getNewsUrl } from '../config/api.config';

export const NewsService = {
	async getAll(SearchTerm = null) {
		return axiosClassic.get(getNewsUrl(''), {
			params: SearchTerm ? { SearchTerm } : {},
		});
	},
};
