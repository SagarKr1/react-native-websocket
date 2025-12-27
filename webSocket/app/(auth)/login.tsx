import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createAuthStyle } from '@/assets/styles/Auth.style';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
    const router = useRouter()

    const styles = createAuthStyle();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // later → API / Cognito / JWT
        console.log('Email:', email);
        console.log('Password:', password);
        router.navigate('/(app)/(tabs)/home')
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>router.navigate('/signup')}>
                <Text style={styles.linkText}>
                    Don’t have an account? Sign up
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
