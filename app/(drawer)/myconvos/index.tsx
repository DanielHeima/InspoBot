import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerScreen } from '@/src/components/screen/DrawerScreen';
import { ThemedView } from '@/src/components/themed/ThemedView';
import { useLabel } from '@/src/hooks/useLabel';


export default function MyConvosScreen() {
  return (
    <ThemedView style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
      <DrawerScreen showLangToggle={true} showThemeToggle={true} title={useLabel('navMyConvos')} />
      <ThemedView><Text style={{ fontSize: 24 }}>Nothing to see here.</Text></ThemedView>
    </ThemedView>
  );
}