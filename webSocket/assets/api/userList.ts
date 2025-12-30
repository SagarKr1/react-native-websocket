import api from './axios';


export const userList = async () => {
    const res = await api.get('/dev/getAll_admin');
    return res.data;
};

