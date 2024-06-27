import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function MyConvosScreen() {
  return (
    <View>
      <Pressable focusable={true} onFocus={()=> {}}>
        <Link push href="/(drawer)/settings">settings</Link>
      </Pressable>
    </View>
  );
}