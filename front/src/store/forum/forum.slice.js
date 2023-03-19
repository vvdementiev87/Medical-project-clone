import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    titlesList: [],
    title: []
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
});

export const { setTitle, setTitlesList } = forumSlice.actions;
export const{ reducer } = forumSlice;