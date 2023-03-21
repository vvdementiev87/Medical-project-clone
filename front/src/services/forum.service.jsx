import { axiosClassic } from '../api/interceptors';
import { getPostsUrl } from '../config/api.config';

export const ForumService = {
	async getTitles() {
		return axiosClassic.get(getPostsUrl('')).then((res) => {
			const postsTitles = [];
			for (let i in res?.data) {
				if (postsTitles.includes(!res?.data[i].title)) {
					postsTitles.push(res?.data[i].title);
				}
			}
			return postsTitles;
		});
	},
};
