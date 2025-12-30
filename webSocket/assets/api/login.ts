import api from './axios';

export type LoginPayload = {
    email: string;
    password: string;
};

export type SignupPayload = {
    name: string;
    email: string;
    password: string;
};

export const loginApi = async (payload: LoginPayload) => {
    const res = await api.post('/dev/login', payload);
    return res.data;
};

// export const signupApi = async (payload: SignupPayload) => {
//     const res = await api.post('/auth/signup', payload);
//     return res.data;
// };
