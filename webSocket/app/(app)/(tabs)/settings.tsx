import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { createSettingsStyle } from '@/assets/styles/Settings.style';
import { getUserFromToken, DecodedUser } from '@/assets/api/InfoToken';

export default function SettingsScreen() {
    const router = useRouter();
    const styles = createSettingsStyle();

    const [user, setUser] = useState<DecodedUser | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            const decodedUser = await getUserFromToken();
            setUser(decodedUser);
        };

        loadUser();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        router.replace('/(auth)/login');
    };

    return (
        <View style={styles.container}>
            {/* 🔝 TOP */}
            <View style={styles.topSection}>
                <Text style={styles.userName}>
                    {user?.name || 'User'}
                </Text>
                <Text style={styles.subText}>
                    {user?.email}
                </Text>
                {user?.phone && (
                    <Text style={styles.subText}>
                        📞 {user.phone}
                    </Text>
                )}
            </View>

            {/* 🔻 BOTTOM */}
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
