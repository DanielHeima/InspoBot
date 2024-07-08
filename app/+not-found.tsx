import { StackScreen } from '@/src/components/screen/StackScreen';
import { ThemedView } from '@/src/components/themed/ThemedView';
import { Link, Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <StackScreen title={"Oops! This screen doesn't exist."} />
      <ThemedView style={styles.container}>
        <Link href="/">Go to home screen</Link>
      </ThemedView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
