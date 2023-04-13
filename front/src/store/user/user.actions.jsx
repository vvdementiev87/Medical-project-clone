import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '../../services/auth/auth.service';
import { FavoritesService } from '../../services/favorites.service';
import { ProfileService } from '../../services/profile.service';
import { toastrError } from '../../utils/toast-error';

export const register = createAsyncThunk(
	'auth/register',
	async (
		{
			password_confirmation,
			email,
			password,
			address,
			sign_for_news,
			position,
			phone,
			surname,
			other_info,
			last_name,
			first_name,
			experience,
			education,
			place_work,
			category,
			birth_date,
		},
		thunkApi
	) => {
		try {
			const response = await AuthService.register(
				password_confirmation,
				email,
				password,
				address,
				sign_for_news,
				position,
				phone,
				surname,
				other_info,
				last_name,
				first_name,
				experience,
				education,
				place_work,
				category,
				birth_date
			);
			toastr.success('Registration', 'Completed successfully');
			return response.data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password);
			toastr.success('Login', 'Completed successfully');
			return response.data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	await AuthService.logout();
	toastr.warning('Logout', 'Completed successfully');
});

export const checkAuth = createAsyncThunk(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens();
			return response.data;
		} catch (error) {
			thunkApi.dispatch(logout());
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const getFavorites = createAsyncThunk(
	'user/favorites/get',
	async ({ user_id }, thunkApi) => {
		try {
			const response = await FavoritesService.getFavorite(user_id);
			toastr.success('Favorites', 'Get successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

export const getRecentViewed = createAsyncThunk(
	'user/recentViewed/get',
	async (_, thunkApi) => {
		try {
			const response = await ProfileService.getRecentViewed();
			toastr.success('RecentViewed', 'Get successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

export const getRecommendations = createAsyncThunk(
	'user/recommendations/get',
	async (_, thunkApi) => {
		try {
			const response = await ProfileService.getRecommendations();
			toastr.success('Recommendations', 'Get successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

export const getNotifications = createAsyncThunk(
	'user/Notifications/get',
	async (_, thunkApi) => {
		try {
			const response = await ProfileService.getNotifications();
			toastr.success('Notifications', 'Get successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

export const setNotifications = createAsyncThunk(
	'user/Notifications/set',
	async (_, thunkApi) => {
		try {
			const response = await ProfileService.setNotifications();
			toastr.success('Notifications', 'Set successfully');
			return response;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

export const update = createAsyncThunk(
	'auth/user/update',
	async (
		{
			address,
			sign_for_news,
			position,
			phone,
			surname,
			other_info,
			last_name,
			first_name,
			experience,
			education,
			place_work,
			category,
			birth_date,
		},
		thunkApi
	) => {
		try {
			const response = await AuthService.update(
				address,
				sign_for_news,
				position,
				phone,
				surname,
				other_info,
				last_name,
				first_name,
				experience,
				education,
				place_work,
				category,
				birth_date
			);
			toastr.success('User update', 'Completed successfully');
			return response.data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
