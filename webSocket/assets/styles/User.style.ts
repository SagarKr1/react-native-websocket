import { StyleSheet } from "react-native";

export const createUserStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 16,
        },

        title: {
            fontSize: 20,
            fontWeight: '700',
            marginVertical: 16,
        },

        userRow: {
            paddingVertical: 14,
            paddingHorizontal: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        userName: {
            fontSize: 16,
            fontWeight: '500',
        },

        status: {
            fontSize: 12,
            marginTop: 2,
        },

        action: {
            color: '#007AFF',
            fontSize: 14,
            fontWeight: '500',
        },
        loader: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        list: {
            paddingBottom: 20,
        },
    })
}