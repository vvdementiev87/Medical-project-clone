import { axiosClassic } from '../api/interceptors';
import { getGalleryUrl } from '../config/api.config';

export const GalleryService = {
	async getAll(SearchTerm = null) {
		return axiosClassic
			.get(getGalleryUrl(''), {
				params: SearchTerm ? { SearchTerm } : {},
			})
			.then((res) => {
				const gallery = [];
				for (let i in res?.data) {
					gallery.push(res?.data[i]);
				}
				return gallery;
			});
	},
	async getById(id) {
		return axiosClassic.get(getGalleryUrl(`/${id}`)).then((res) => {
			return res.data;
		});
	},
};
