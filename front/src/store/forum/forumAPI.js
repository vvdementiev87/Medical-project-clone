import { createAsyncThunk } from '@reduxjs/toolkit';

export const forumURL = 'http://localhost:7000/api/'; //'https://bosomed.ru/middleware/api/'

export const loadAllPosts = createAsyncThunk(
	'forum/loadAllPosts',
	async (_, thunkApi) => {
		try {
			const response = await fetch(`${forumURL}forum/posts`);
			const result = await response.json();
			return result;
		} catch (error) {
			console.log(error);
		}
	}
);

export const loadPostById = createAsyncThunk(
	'forum/loadPostById',
	async (id) => {
		try {
			const response = await fetch(`${forumURL}forum/posts/${id}`);
			const result = await response.json();
			return result;
		} catch (error) {
			console.log(error);
		}
	}
);

export const loadAllComments = createAsyncThunk(
	'forum/loadAllComments',
	async (post_id) => {
		try {
			const response = await fetch(`${forumURL}forum/posts/${post_id}`);
			const result = await response.json();
			return result[0];
		} catch (error) {
			console.log(error);
		}
	}
);
