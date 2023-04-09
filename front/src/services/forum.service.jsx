import { axiosClassic } from '../api/interceptors';
import { getPostsUrl, getCommentsUrl } from '../config/api.config';

const saveToStoragePosts = (data) => {
	localStorage.setItem('posts', JSON.stringify(data));
};

export const ForumService = {
	async getAllPosts() {
		return axiosClassic.get(getPostsUrl('')).then((res) => {
			saveToStoragePosts(res.data);
			return res.data;
		});
	},
	async getPostByIdWithComments(postId) {
		return axiosClassic.get(getCommentsUrl(`/${postId}`)).then((res) => {
			return res.data;
		});
	},
	async addPost({ description, title, author_id }) {
		return axiosClassic
			.post(getPostsUrl(`/add`), { description, title, author_id })
			.then((res) => {
				return res.data;
			});
	},
	async editPost({ description, title, author_id, post_id }) {
		return axiosClassic
			.post(getPostsUrl(`/edit`), { description, title, author_id, post_id })
			.then((res) => {
				return res.data;
			});
	},
	async deletePost(postId) {
		return axiosClassic.get(getPostsUrl(`/delete/${postId}`)).then((res) => {
			console.log(postId);
			return res.data;
		});
	},
	async addComment({ description, author_id, post_id }) {
		return axiosClassic
			.post(getCommentsUrl(`/add`), { description, author_id, post_id })
			.then((res) => {
				return res.data;
			});
	},
	async editComment({ description, comment_id, post_id }) {
		console.log(description);
		return axiosClassic
			.post(getCommentsUrl(`/edit`), {
				description,
				comment_id,
				post_id,
			})
			.then((res) => {
				return res.data;
			});
	},
	async deleteComment(commentId) {
		return axiosClassic
			.get(getCommentsUrl(`/delete/${commentId}`))
			.then((res) => {
				return res.data;
			});
	},
};
