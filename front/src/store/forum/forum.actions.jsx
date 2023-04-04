import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';
import { ForumService } from '../../services/forum.service';
import { toastrError } from '../../utils/toast-error';

export const getAllPosts = createAsyncThunk(
	'forum/posts',
	async (_, thunkApi) => {
		try {
			const response = await ForumService.getAllPosts();
			toastr.success('Posts', 'Recieved successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const getPostByIdWithComments = createAsyncThunk(
	'forum/comments',
	async ({ postId }, thunkApi) => {
		try {
			const response = await ForumService.getPostByIdWithComments(postId);

			toastr.success('Comments', 'Recieved successfully');
			console.log({ id: Number(postId), comments: response });
			return { id: Number(postId), comments: response };
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const addPost = createAsyncThunk(
	'forum/post/add',
	async ({ post }, thunkApi) => {
		try {
			const response = await ForumService.addPost(post);
			toastr.success('Post added', 'Recieved successfully');

			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const editPost = createAsyncThunk(
	'forum/post/edit',
	async ({ post }, thunkApi) => {
		try {
			const response = await ForumService.editPost(post);
			toastr.success('Post edited', 'Recieved successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const deletePost = createAsyncThunk(
	'forum/post/delete',
	async ({ postId }, thunkApi) => {
		try {
			console.log(postId);
			const response = await ForumService.deletePost(postId);
			toastr.warning('Post deleted', 'Deleted successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const addComment = createAsyncThunk(
	'forum/comment/add',
	async ({ comment }, thunkApi) => {
		try {
			const response = await ForumService.addComment(comment);
			toastr.success('Comment added', 'Recieved successfully');

			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const editComment = createAsyncThunk(
	'forum/comment/edit',
	async ({ comment }, thunkApi) => {
		try {
			const response = await ForumService.editComment(comment);
			toastr.success('Comment edited', 'Recieved successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const deleteComment = createAsyncThunk(
	'forum/comment/delete',
	async ({ commentId, postId }, thunkApi) => {
		try {
			const response = await ForumService.deleteComment(commentId);
			toastr.warning('Comment deleted', 'Deleted successfully');
			console.log(response);
			return { ...response, post_id: postId };
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
