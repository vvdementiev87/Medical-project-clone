import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './rootReducers';

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV === 'development',
});

console.log(store);
