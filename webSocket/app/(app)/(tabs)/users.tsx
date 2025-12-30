import { createUserStyle } from '@/assets/styles/User.style';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { userList } from '@/assets/api/userList';

type User = {
    email: string;
    name: string;
    phone: Number;
};

export default function UsersScreen() {
    const router = useRouter();
    const styles = createUserStyle();

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await userList();
                // console.log("user List : ", res['body-json']['body']);
                setUsers(res['body-json']['body']['items']);                 
            } catch (error) {
                console.log('Failed to fetch users'+ error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Users</Text>

            <FlatList<User>
                data={users}
                keyExtractor={(item) => item.email}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.userRow}
                        onPress={() =>
                            router.push({
                                pathname: '/individual-chat/[userId]',
                                params: { userId: item.name },
                            })
                        }
                    >
                        <View>
                            <Text style={styles.userName}>{item.name}</Text>
                            {/* <Text
                                style={[
                                    styles.status,
                                    { color: item.online ? 'green' : 'gray' },
                                ]}
                            >
                                {item.online ? 'Online' : 'Offline'}
                            </Text> */}
                        </View>

                        <Text style={styles.action}>Message</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
