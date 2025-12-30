import { View, Text, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { createChatStyle } from '@/assets/styles/Chat.style';
import ChatInput from '@/components/Home/ChatInput';

type Message = {
    id: string;
    text: string;
    isMe: boolean;
};

export default function IndividualChatScreen() {
    const styles = createChatStyle();
    const { userId } = useLocalSearchParams<{ userId: string }>();

    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hey 👋', isMe: false },
        { id: '2', text: 'Hello bro', isMe: true },
    ]);

    const sendMessage = (text: string) => {
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), text, isMe: true },
        ]);
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <View style={styles.container}>
                <Text style={styles.header}>Chat with {userId}</Text>

                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.messages}
                    renderItem={({ item }) => (
                        <View
                            style={[
                                styles.bubble,
                                item.isMe ? styles.myBubble : styles.otherBubble,
                            ]}
                        >
                            <Text style={styles.bubbleText}>{item.text}</Text>
                        </View>
                    )}
                />

                <ChatInput onSend={sendMessage} />
            </View>
        </KeyboardAvoidingView>
    );
}
