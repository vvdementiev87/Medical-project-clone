import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '../../services/auth/auth.service';

export const register = createAsyncThunk(
	'auth/register',
	async (
		{
			email,
			password,
			address,
			sign_for_news,
			position,
			phone,
			patronym,
			other_info,
			last_name,
			first_name,
			experience,
			education,
			company,
			category,
			birth_date,
		},
		thunkApi
	) => {
		try {
			const response = await AuthService.register(
				email,
				password,
				address,
				sign_for_news,
				position,
				phone,
				patronym,
				other_info,
				last_name,
				first_name,
				experience,
				education,
				company,
				category,
				birth_date
			);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	await AuthService.logout();
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
