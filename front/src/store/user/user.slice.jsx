import { getStoreLocalStorage } from '../../utils/local-storage';
import { createSlice } from '@reduxjs/toolkit';
import {
	logout,
	login,
	checkAuth,
	register,
	getFavorites,
	getRecentViewed,
	getRecommendations,
	update,
	getNotifications,
	setNotifications,
} from './user.actions';

const initialState = {
	isLoading: false,
	user: getStoreLocalStorage('user'),
	favorites: {},
	recentViewed: {},
	recommendations: {},
	notifications: {},
};
export const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user;
			})
			.addCase(getFavorites.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getFavorites.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.favorites = { ...state.favorites, ...payload };
			})
			.addCase(getFavorites.rejected, (state) => {
				state.isLoading = false;
				state.favorites = null;
			})
			.addCase(getRecentViewed.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRecentViewed.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.recentViewed = { ...state.recentViewed, ...payload };
			})
			.addCase(getRecentViewed.rejected, (state) => {
				state.isLoading = false;
				state.recentViewed = null;
			})
			.addCase(getRecommendations.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRecommendations.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.recommendations = { ...state.recommendations, ...payload };
			})
			.addCase(getRecommendations.rejected, (state) => {
				state.isLoading = false;
				state.recommendations = null;
			})
			.addCase(getNotifications.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getNotifications.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.notifications = { ...state.notifications, ...payload };
			})
			.addCase(getNotifications.rejected, (state) => {
				state.isLoading = false;
				state.notifications = null;
			})
			.addCase(setNotifications.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(setNotifications.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.notifications = { ...state.notifications, ...payload };
			})
			.addCase(setNotifications.rejected, (state) => {
				state.isLoading = false;
				state.notifications = null;
			})
			.addCase(update.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(update.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = { ...payload.user };
			})
			.addCase(update.rejected, (state) => {
				state.isLoading = false;
				state.user = null;
			});
	},
});
export const { reducer } = userSlice;
