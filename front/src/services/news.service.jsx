import { axiosClassic } from '../api/interceptors';
import { getNewsUrl } from '../config/api.config';

export const NewsService = {
	async getAll(SearchTerm = null) {
		return axiosClassic
			.get(getNewsUrl(''), {
				params: SearchTerm ? { SearchTerm } : {},
			})
			.then((res) => {
				const news = [];
				for (let i in res?.data) {
					news.push(res?.data[i]);
				}
				return news;
			});
	},
	async getById(id) {
		return axiosClassic.get(getNewsUrl(`/${id}`)).then((res) => {
			return res.data;
		});
	},
};
