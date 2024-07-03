import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from "@react-navigation/drawer";


export default function MyConvosScreen() {
  return (
    <View>
      <Drawer.Screen options={{ headerShown: true, title: 'My convos', headerLeft: () => <DrawerToggleButton/>}} />
      <View><Text>Nothing to see here.</Text></View>
    </View>
  );
}