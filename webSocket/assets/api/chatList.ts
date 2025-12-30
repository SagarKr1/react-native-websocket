import demoApi from './demoApi';

export const chatList = async (userId: string) => {
    const res = await demoApi.get(`/dev/chat_list`, {
        params: { userId }
    });
    return res.data;
};
