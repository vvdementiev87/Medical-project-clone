import { createSlice } from '@reduxjs/toolkit';
import { getStoreLocalStorage } from '../../utils/local-storage';
import {
	getAllPosts,
	getPostByIdWithComments,
	addPost,
	addComment,
	deletePost,
	deleteComment,
	editComment,
	editPost,
} from './forum.actions';

const initialState = {
	isLoading: false,
	posts: getStoreLocalStorage('posts'),
};

export const forumSlice = createSlice({
	name: 'forum',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllPosts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllPosts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.posts = payload;
			})
			.addCase(getAllPosts.rejected, (state) => {
				state.isLoading = false;
				state.posts = {};
			})
			.addCase(getPostByIdWithComments.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPostByIdWithComments.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.posts = {
					...state.posts,
					[payload.id]: { ...state.posts[payload.id], ...payload },
				};
			})
			.addCase(getPostByIdWithComments.rejected, (state) => {
				state.isLoading = false;
				state.posts = {};
			})
			.addCase(addPost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addPost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.posts = { ...state.posts, [payload.id]: { ...payload } };
			})
			.addCase(addPost.rejected, (state) => {
				state.isLoading = false;
				state.posts = {};
			})

			.addCase(editPost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editPost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.posts = {
					...state.posts,
					[payload.id]: {
						...state.posts[payload.id],
						title: payload.title,
						description: payload.description,
					},
				};
			})
			.addCase(editPost.rejected, (state) => {
				state.isLoading = false;
				state.posts = {};
			})

			.addCase(deletePost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deletePost.fulfilled, (state, { payload }) => {
				console.log(payload.post_id);
				state.isLoading = false;
				state.posts = {
					...Object.fromEntries(
						Object.entries(state.posts).filter((key) => {
							return key[0] != payload.post_id;
						})
					),
				};
			})
			.addCase(deletePost.rejected, (state) => {
				state.isLoading = false;
				state.posts = {};
			})
			.addCase(addComment.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addComment.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.posts = {
					...state.posts,
					[payload.post_id]: {
						...state.posts[payload.post_id],
						comments: {
							...state.posts[payload.post_id]?.comments,
							[payload.id]: { ...payload },
						},
					},
				};
			})
			.addCase(addComment.rejected, (state) => {
				state.isLoading = false;
				state.posts = {};
			})
			.addCase(editComment.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editComment.fulfilled, (state, { payload }) => {
				console.log(payload.post_id);
				state.isLoading = false;
				state.posts = {
					...state.posts,
					[payload.post_id]: {
						...state.posts[payload.post_id],
						comments: {
							...state.posts[payload.post_id]?.comments,
							[payload.id]: {
								...state.posts[payload.post_id]?.comments[payload.id],
								description: payload.description,
							},
						},
					},
				};
			})
			.addCase(editComment.rejected, (state) => {
				state.isLoading = false;
				state.posts = { ...state.posts };
			})
			.addCase(deleteComment.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteComment.fulfilled, (state, { payload }) => {
				console.log(payload.post_id);
				console.log(payload.comment_id);
				state.isLoading = false;
				state.posts = {
					...state.posts,
					[payload.post_id]: {
						...state.posts[payload.post_id],
						comments: {
							...Object.fromEntries(
								Object.entries(state.posts[payload.post_id].comments).filter(
									(key) => {
										return key[0] != payload.comment_id;
									}
								)
							),
						},
					},
				};
			})
			.addCase(deleteComment.rejected, (state) => {
				state.isLoading = false;
				state.posts = {};
			});
	},
});

export const { reducer } = forumSlice;
