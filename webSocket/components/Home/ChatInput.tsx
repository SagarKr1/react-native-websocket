import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { createChatStyle } from '@/assets/styles/Chat.style';
type ChatInputProps = {
    onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
    const styles = createChatStyle();
    const [text, setText] = useState('');

    const handleSend = () => {
        if (!text.trim()) return;
        onSend(text);
        setText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Type a message..."
                value={text}
                onChangeText={setText}
                multiline
            />

            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}
