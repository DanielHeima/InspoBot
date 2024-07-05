import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerScreen } from '@/src/components/drawer/DrawerScreen';
import { ThemedView } from '@/src/components/themed/ThemedView';


export default function MyConvosScreen() {
  return (
    <ThemedView>
      <DrawerScreen title={'My convos'}/>
      <ThemedView><Text>Nothing to see here.</Text></ThemedView>
    </ThemedView>
  );
}