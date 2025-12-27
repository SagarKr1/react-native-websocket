import { createHomeStyle } from '@/assets/styles/Home.style';
import { View, Text } from 'react-native';

type Props = {
    title: string;
};
export default function SectionHeader({ title }:Props) {
    const styles = createHomeStyle();
    return (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
        </View>
    );
}
