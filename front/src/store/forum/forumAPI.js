
import { createAsyncThunk } from '@reduxjs/toolkit';

export const forumURL = "https://virtserver.swaggerhub.com/Landesadel/Bosom/1.0.0/"

export const loadAllPosts = createAsyncThunk(
	'forum/loadAllPosts',
	async (_, thunkApi) => {
		try {
			const response = await fetch( `${forumURL}forum/posts`);
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
			const response = await fetch( `${forumURL}forum/posts/${id}`);
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