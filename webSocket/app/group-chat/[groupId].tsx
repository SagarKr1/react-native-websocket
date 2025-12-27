import { View, Text, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { createChatStyle } from '@/assets/styles/Chat.style';
import ChatInput from '@/components/Home/ChatInput';

type Message = {
    id: string;
    text: string;
    isMe: boolean;
    sender?: string;
};

export default function GroupChatScreen() {
    const styles = createChatStyle();
    const { groupId } = useLocalSearchParams<{ groupId: string }>();

    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Welcome everyone 👋', isMe: false, sender: 'Rahul' },
        { id: '2', text: 'Hi all!', isMe: true },
    ]);

    const sendMessage = (text: string) => {
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), text, isMe: true },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Group: {groupId}</Text>

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
                        {!item.isMe && item.sender && (
                            <Text style={styles.sender}>{item.sender}</Text>
                        )}
                        <Text style={styles.bubbleText}>{item.text}</Text>
                    </View>
                )}
            />

            <ChatInput onSend={sendMessage} />
        </View>
    );
}
