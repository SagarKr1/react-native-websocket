import { StyleSheet } from "react-native";

export const createAuthStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            paddingHorizontal: 24,
            justifyContent: 'center',
        },

        title: {
            fontSize: 28,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 6,
            color: '#111',
        },

        subtitle: {
            fontSize: 14,
            textAlign: 'center',
            color: '#666',
            marginBottom: 32,
        },

        input: {
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 14,
            fontSize: 16,
            marginBottom: 16,
            color: '#111',
        },

        button: {
            backgroundColor: '#000',
            paddingVertical: 14,
            borderRadius: 10,
            marginTop: 8,
        },

        buttonText: {
            color: '#fff',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600',
        },

        linkText: {
            textAlign: 'center',
            marginTop: 20,
            color: '#007AFF',
            fontSize: 14,
        },
    })
}