import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '../../services/auth/auth.service';
import { ForumService } from '../../services/forum.service';
import { toastrError } from '../../utils/toast-error';

export const getTitles = createAsyncThunk(
	'forum/titles',
	async (_, thunkApi) => {
		try {
			const response = await ForumService.getTitles();
			toastr.success('Posts titles', 'Recieved successfully');
			return response.data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
