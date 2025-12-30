import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

const TOKEN_KEY = 'token';

export type DecodedUser = {
    name?: string;
    email?: string;
    phone?: string;
    exp?: number;
};

export const getUserFromToken = async (): Promise<DecodedUser | null> => {
    try {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        if (!token) return null;

        const decoded = jwtDecode<DecodedUser>(token);
        return decoded;
    } catch (error) {
        console.log('Token decode failed', error);
        return null;
    }
};
