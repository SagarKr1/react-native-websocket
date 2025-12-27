import { createHomeStyle } from '@/assets/styles/Home.style';
import HomeGroups from '@/components/Home/HomeGroups';
import HomeIndividuals from '@/components/Home/HomeIndividual';
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
    const styles = createHomeStyle()
    return (
        <ScrollView style={styles.container}>
            <HomeGroups />
            <HomeIndividuals />
        </ScrollView>
    );
}
