import { StyleSheet } from "react-native";

export const createSettingsStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
            justifyContent: 'space-between', // 🔥 key part
        },

        topSection: {
            marginTop: 20,
        },

        userName: {
            fontSize: 22,
            fontWeight: '700',
            color: '#111',
        },

        subText: {
            fontSize: 14,
            color: '#666',
            marginTop: 4,
        },

        bottomSection: {
            marginBottom: 30,
        },

        logoutBtn: {
            backgroundColor: '#000',
            paddingVertical: 14,
            borderRadius: 10,
            alignItems: 'center',
        },

        logoutText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
        },
    })
}