import { createSlice } from "@reduxjs/toolkit";
import { loadAllPosts, loadAllComments, loadPostById } from "./forumAPI";


const initialState = {
    titlesList: [],
    title: [],
    status: 'loading',
    commentList: [],
    commentStatus: 'loading',
	currentPost: {},
}

export const forumSlice = createSlice({
    name: 'forum',
    initialState,
    reducers: {
        setTitlesList(state, action) {
            state.titlesList.push(action.payload);
        },
        setTitle(state, action) {
            state.title.push(action.payload);
        }
    },
    extraReducers: (builder) => {
		builder
			.addCase(loadAllPosts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loadAllPosts.fulfilled, (state, { payload }) => {
				state.status = "idle";
				state.titlesList = [ payload ];
			})
			.addCase(loadAllPosts.rejected, (state) => {
				state.status = "error";
			})

            .addCase(loadAllComments.pending, (state) => {
				state.commentStatus = "loading";
			})
			.addCase(loadAllComments.fulfilled, (state, { payload }) => {
				state.commentStatus = "idle";
				state.commentList = [...payload.comments];
			})
			.addCase(loadAllComments.rejected, (state) => {
				state.commentStatus = "error";
			})
			.addCase(loadPostById.fulfilled, (state, { payload }) => {
				state.currentPost = payload;
			})
	},
});

export const { setTitle, setTitlesList } = forumSlice.actions;
export const{ reducer } = forumSlice;