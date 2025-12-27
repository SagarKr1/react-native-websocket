import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SectionHeader from './SectionHeader';
import { createHomeStyle } from '@/assets/styles/Home.style';
import { useRouter } from 'expo-router';

const GROUPS = [
    { id: '1', name: 'Dev Group', members: 12 },
    { id: '2', name: 'Friends', members: 5 },
];

export default function HomeGroups() {
    const router = useRouter();
    const styles = createHomeStyle()
    return (
        <View style={styles.section}>
            <SectionHeader title="Groups" />

            <FlatList
                data={GROUPS}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}
                        onPress={() =>
                            router.push({
                                pathname: '/group-chat/[groupId]',
                                params: { groupId: 683746283 },
                            })
                        }
                    >
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <Text style={styles.cardSub}>
                            {item.members} members
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
