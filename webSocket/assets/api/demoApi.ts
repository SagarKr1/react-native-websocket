import axios from 'axios';

const demoApi = axios.create({
    baseURL: 'https://icypdyigwb.execute-api.ap-south-1.amazonaws.com', // 👈 FULL base
    headers: {
        'Content-Type': 'application/json',
    },
});

export default demoApi;
