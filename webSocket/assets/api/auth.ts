import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

const TOKEN_KEY = 'token';

type DecodedToken = {
    exp: number;
};

export async function isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (!token) return false;

    try {
        const decoded = jwtDecode<DecodedToken>(token);
        return decoded.exp > Date.now() / 1000;
    } catch {
        return false;
    }
}
