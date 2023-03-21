import { createSlice } from '@reduxjs/toolkit';
import { getTitles } from './forum.actions';

const initialState = {
	titles: [],
	posts: [],
};

export const forumSlice = createSlice({
	name: 'forum',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getTitles.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTitles.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.titles = payload.titles;
			})
			.addCase(getTitles.rejected, (state) => {
				state.isLoading = false;
				state.titles = [];
			});
	},
});

export const { reducer } = forumSlice;
