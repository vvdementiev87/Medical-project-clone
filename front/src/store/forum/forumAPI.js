import { createAsyncThunk } from '@reduxjs/toolkit';

export const forumURL = 'http://localhost:7000/api/'; //'https://bosomed.ru/middleware/api/'

export const loadAllPosts = createAsyncThunk(
	'forum/loadAllPosts',
	async (_, thunkApi) => {
		try {
			const response = await fetch(`${forumURL}forum/posts`);
			console.log(response);
			const result = await response.json();
			console.log(result);
			const posts = [];
			for (let i in result) {
				posts.push(result[i]);
			}
			console.log(posts);
			return posts;
		} catch (error) {
			console.log(error);
		}
	}
);

export const loadPostById = createAsyncThunk(
	'forum/loadPostById',
	async ({ topicId }, thunkApi) => {
		try {
			const response = await fetch(`${forumURL}forum/posts/${topicId}`);
			console.log(response);
			const result = await response.json();

			return result;
		} catch (error) {
			console.log(error);
		}
	}
);

export const loadAllComments = createAsyncThunk(
	'forum/loadAllComments',
	async ({ topicId }, thunkApi) => {
		console.log(topicId);
		try {
			const response = await fetch(`${forumURL}forum/posts/${topicId}`);
			console.log(response);
			const result = await response.json();
			console.log(result);
			return result[0];
		} catch (error) {
			console.log(error);
		}
	}
);
