import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SectionHeader from './SectionHeader';
import { createHomeStyle } from '@/assets/styles/Home.style';

const USERS = [
    { id: '1', name: 'Rahul', online: true },
    { id: '2', name: 'Aman', online: false },
];

export default function HomeIndividuals() {
    const styles = createHomeStyle();
    return (
        <View style={styles.section}>
            <SectionHeader title="Individuals" />

            {USERS.map((user) => (
                <TouchableOpacity key={user.id} style={styles.userRow}>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text
                            style={[
                                styles.status,
                                { color: user.online ? 'green' : 'gray' },
                            ]}
                        >
                            {user.online ? 'Online' : 'Offline'}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}
