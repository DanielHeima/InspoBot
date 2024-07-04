import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer'
import { View, Text, StyleSheet, ColorValue } from 'react-native';
import { DarkModeToggle } from '../buttons/DarkModeToggle';

type DrawerScreenType = {
  title: string;
  headerLeftShown?: boolean;
  headerRightShown?: boolean;
}
export function DrawerScreen({title, headerLeftShown = true, headerRightShown = true}: DrawerScreenType) {
  return <Drawer.Screen options={{
      headerShown: true,
      headerLeft: () =>  headerLeftShown ? <DrawerToggleButton  /> : <></>,
      headerRight: () => headerRightShown ? <View><DarkModeToggle/><Text>Settings</Text></View> : <></>,
      title
    }} />
}