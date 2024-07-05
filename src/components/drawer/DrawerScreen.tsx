import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer'
import { View, Text, StyleSheet, ColorValue, StyleProp, ViewStyle } from 'react-native';
import { DarkModeToggleButton } from '../buttons/DarkModeToggleButton';
import { LanguageToggleButton } from '../buttons/LanguageToggleButton';
import { ThemedView } from '../themed/ThemedView';

type DrawerScreenType = {
  title: string;
  headerLeftShown?: boolean;
  headerRightShown?: boolean;
}
export function DrawerScreen({title, headerLeftShown = true, headerRightShown = true}: DrawerScreenType) {
  return <Drawer.Screen options={{
      headerShown: true,
      headerLeft: () =>  headerLeftShown ? <DrawerToggleButton  /> : <></>,
      headerRight: () => headerRightShown ? <ThemedView style={{flexDirection: 'row'}}><DarkModeToggleButton/><LanguageToggleButton/></ThemedView> : <></>,
      title
    }} />
}