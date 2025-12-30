import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createAuthStyle } from '@/assets/styles/Auth.style';
import { useRouter } from 'expo-router';
import { loginApi } from '@/assets/api/login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const router = useRouter();
    const styles = createAuthStyle();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Validation', 'Email and password are required');
            return;
        }

        try {
            setLoading(true);

            const res = await loginApi({ email, password });

            // console.log('LOGIN RESPONSE:', res['body-json']);

            // Save token safely
            await AsyncStorage.setItem('token', res['body-json']['token']);
            // console.log("token : ", res['body-json']['token']);


            // Go to home (remove login from stack)
            router.replace('/(app)/(tabs)/home');

        } catch (err: any) {
            Alert.alert(
                'Login Failed',
                err.message || 'Invalid credentials'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back 👋</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Logging in...' : 'Login'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                <Text style={styles.linkText}>
                    Don’t have an account? Sign up
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
