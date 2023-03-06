import { axiosClassic } from '../api/interceptors';
import { getVideosUrl } from '../config/api.config';

export const VideoService = {
	async getAll(SearchTerm = null) {
		return axiosClassic.get(getVideosUrl(''), {
			params: SearchTerm ? { SearchTerm } : {},
		}).then((res)=>{
			const videos=[]
			for (let i in res?.data) {
				videos.push(res?.data[i]);
			}
			return videos
		});
	},
};
