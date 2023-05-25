import { createAsyncThunk } from '@reduxjs/toolkit';

export const forumURL = `${process.env.REACT_APP_URL}/api/`;

export const loadAllPosts = createAsyncThunk(
	'forum/loadAllPosts',
	async (_, thunkApi) => {
		try {
			const response = await fetch(`${forumURL}forum/posts`);

			const result = await response.json();

			const posts = [];
			for (let i in result) {
				posts.push(result[i]);
			}

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
			const response = await fetch(`${forumURL}forum/${topicId}/comments`);
			console.log(response);
			const result = await response.json();
			console.log(`${forumURL}forum/${topicId}/comments`);
			console.log(result);
			return result;
		} catch (error) {
			console.log(error);
		}
	}
);
