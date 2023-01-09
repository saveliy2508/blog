import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

// можно так
// baseUrl == __IS_DEV__ ? localhost:8000 : prod.ru

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
