import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '../../services/auth/auth.service';
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
				password_confirmation,
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
