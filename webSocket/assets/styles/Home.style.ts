import { StyleSheet } from "react-native";

export const createHomeStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 16,
            paddingTop:20
        },

        section: {
            marginTop: 24,
        },

        sectionHeader: {
            marginBottom: 12,
        },

        sectionTitle: {
            fontSize: 18,
            fontWeight: '700',
            color: '#111',
        },

        card: {
            width: 160,
            padding: 16,
            borderRadius: 12,
            backgroundColor: '#f4f4f4',
            marginRight: 12,
        },

        cardTitle: {
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 4,
        },

        cardSub: {
            fontSize: 12,
            color: '#666',
        },

        userRow: {
            paddingVertical: 14,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
        },

        userInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        userName: {
            fontSize: 16,
            fontWeight: '500',
        },

        status: {
            fontSize: 12,
        },
    })
}