import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'token';

const api = axios.create({
    baseURL: 'https://056cx326me.execute-api.ap-south-1.amazonaws.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Request interceptor
 * Automatically attaches Authorization header
 */
api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem(TOKEN_KEY);

        if (token) {
            config.headers.Authorization = `${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
