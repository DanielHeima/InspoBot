import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/newconvo"  >
        <Text>New convo</Text>
      </Link>
    </View>
  );
}