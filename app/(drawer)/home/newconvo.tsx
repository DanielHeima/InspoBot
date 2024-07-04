import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function NewConvoScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "New convo" }} />
      <Text>New Convo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  }
});