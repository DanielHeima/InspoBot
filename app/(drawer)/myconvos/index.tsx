import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerScreen } from '@/src/components/drawer/DrawerScreen';


export default function MyConvosScreen() {
  return (
    <View>
      <DrawerScreen title={'My convos'}/>
      <View><Text>Nothing to see here.</Text></View>
    </View>
  );
}