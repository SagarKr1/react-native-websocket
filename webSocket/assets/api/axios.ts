import axios from 'axios';

const api = axios.create({
    baseURL: 'https://056cx326me.execute-api.ap-south-1.amazonaws.com', // backend URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
