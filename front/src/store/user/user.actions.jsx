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
			// password_confirmation,
			email,
			// password,
			address,
			sign_for_news,
			position,
			phone,
			surname,
			// other_info,
			last_name,
			first_name,
			experience,
			education,
			education_end,
			company,
			// category,
			birth_date,
			specialization,
			degree,
			academic_rank,
			interests,
			is_other_organization,
			is_member,
			has_agreed,
		},
		thunkApi
	) => {
		try {
			const response = await AuthService.register(
				// password_confirmation,
				email,
				// password,
				address,
				sign_for_news,
				position,
				phone,
				surname,
				// other_info,
				last_name,
				first_name,
				experience,
				education,
				education_end,
				company,
				// category,
				birth_date,
				specialization,
				degree,
				academic_rank,
				interests,
				is_other_organization,
				is_member,
				has_agreed
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
	async ({ id }, thunkApi) => {
		try {
			const response = await ProfileService.getNotifications(id);
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
	async ({ id }, thunkApi) => {
		try {
			const response = await ProfileService.setNotifications(id);
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
			// password_confirmation,
			email,
			// password,
			address,
			sign_for_news,
			position,
			phone,
			surname,
			// other_info,
			last_name,
			first_name,
			experience,
			education,
			education_end,
			company,
			// category,
			birth_date,
			specialization,
			degree,
			academic_rank,
			interests,
			is_other_organization,
		},
		thunkApi
	) => {
		try {
			console.log(interests);
			console.log(sign_for_news);
			const response = await AuthService.update(
				// password_confirmation,
				email,
				// password,
				address,
				sign_for_news,
				position,
				phone,
				surname,
				// other_info,
				last_name,
				first_name,
				experience,
				education,
				education_end,
				company,
				// category,
				birth_date,
				specialization,
				degree,
				academic_rank,
				interests,
				is_other_organization
			);
			toastr.success('User update', 'Completed successfully');
			return response.data;
		} catch (error) {
			console.log(error);
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
