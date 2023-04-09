import axios from 'axios';
import {getContentType} from './api.helpers';
import {API_URL} from '../config/api.config';

export const axiosClassic = axios.create({
    baseURL: API_URL,
    headers: getContentType(),
    withCredentials: true
});
export const getCsrfToken = async () =>
    await axiosClassic.get('sanctum/csrf-cookie');
