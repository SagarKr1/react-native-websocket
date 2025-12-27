import { StyleSheet } from "react-native";

export const createChatStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },

        header: {
            padding: 16,
            fontSize: 16,
            fontWeight: '600',
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
        },

        messages: {
            padding: 16,
            flexGrow: 1,
        },

        bubble: {
            maxWidth: '75%',
            padding: 12,
            borderRadius: 12,
            marginBottom: 10,
        },

        myBubble: {
            backgroundColor: '#DCF8C6',
            alignSelf: 'flex-end',
        },

        otherBubble: {
            backgroundColor: '#F1F1F1',
            alignSelf: 'flex-start',
        },

        bubbleText: {
            fontSize: 14,
            color: '#111',
        },

        sender: {
            fontSize: 11,
            fontWeight: '600',
            marginBottom: 4,
            color: '#555',
        },

        /* INPUT */
        inputContainer: {
            flexDirection: 'row',
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: '#eee',
            alignItems: 'flex-end',
        },

        input: {
            flex: 1,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 20,
            paddingHorizontal: 14,
            paddingVertical: 8,
            maxHeight: 100,
        },

        sendButton: {
            backgroundColor: '#000',
            marginLeft: 8,
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 20,
        },

        sendText: {
            color: '#fff',
            fontWeight: '600',
        },
    })
}