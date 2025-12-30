import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import SectionHeader from './SectionHeader';
import { createHomeStyle } from '@/assets/styles/Home.style';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { chatList } from '@/assets/api/chatList';
import { getUserFromToken } from '@/assets/api/InfoToken';

export default function HomeIndividuals() {
    const router = useRouter();
    const styles = createHomeStyle();

    const [currentUser, setCurrentUser] = useState<any>(null);
    const [chats, setChats] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserFromToken();
                console.log(userData);


                if (!userData || !userData.email) {
                    console.log("Invalid token data");
                    return;
                }

                setCurrentUser(userData);

                // ✅ send userId (NOT email)
                const res = await chatList(userData.email);
                console.log(res['body']['data']);


                setChats(res['body']['data'] || []);
            } catch (e) {
                Alert.alert("Error", `${e}`)
                console.log("Error from chat list:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // ✅ important

    const renderItem = ({ item }: any) => {
        const otherUserIndex = item.userId.findIndex(
            (id: string) => id !== currentUser.userId
        );

        return (
            <TouchableOpacity
                style={styles.userRow}
                onPress={() =>
                    router.push({
                        pathname: '/group-chat/[groupId]',
                        params: { groupId: item.id },
                    })
                }
            >
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>
                        {currentUser.name === item.userName[0] ? item.userName[1] : item.userName[0]}
                    </Text>

                    <Text style={[styles.status, { color: 'gray' }]}>
                        Offline
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    if (loading) {
        return <Text style={{ padding: 20 }}>Loading chats...</Text>;
    }

    return (
        <View style={styles.section}>
            <SectionHeader title="Individuals" />

            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={
                    <Text style={{ padding: 20 }}>No chats found</Text>
                }
            />
        </View>
    );
}
