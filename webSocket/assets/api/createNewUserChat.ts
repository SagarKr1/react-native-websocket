import demoApi from './demoApi';

export type LoginPayload = {
    userId: Array<string>;
    userName: Array<string>;
};


export const UserChat = async (payload: LoginPayload) => {
    const res = await demoApi.post('/dev/Create_new_chat', payload);
    return res.data;
};

