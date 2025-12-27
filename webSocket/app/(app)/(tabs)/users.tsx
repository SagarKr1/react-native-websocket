import { createUserStyle } from '@/assets/styles/User.style';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

type User = {
    id: string;
    name: string;
    online: boolean;
};

const USERS: User[] = [
    { id: '1', name: 'Rahul', online: true },
    { id: '2', name: 'Aman', online: false },
    { id: '3', name: 'Suman', online: true },
];

export default function UsersScreen() {
    const router = useRouter();
    const styles = createUserStyle()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Users</Text>

            <FlatList<User>
                data={USERS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.userRow}
                    onPress={()=>router.push('/individual-chat/userId')}
                    >
                        <View>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text
                                style={[
                                    styles.status,
                                    { color: item.online ? 'green' : 'gray' },
                                ]}
                            >
                                {item.online ? 'Online' : 'Offline'}
                            </Text>
                        </View>

                        <Text style={styles.action}>Message</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
