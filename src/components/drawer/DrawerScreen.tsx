import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer'
import { View, Text, StyleSheet, ColorValue, StyleProp, ViewStyle } from 'react-native';
import { DarkModeToggleButton } from '../buttons/DarkModeToggleButton';
import { LanguageToggleButton } from '../buttons/LanguageToggleButton';

type DrawerScreenType = {
  title: string;
  headerLeftShown?: boolean;
  headerRightShown?: boolean;
}
export function DrawerScreen({title, headerLeftShown = true, headerRightShown = true}: DrawerScreenType) {
  return <Drawer.Screen options={{
      headerShown: true,
      headerLeft: () =>  headerLeftShown ? <DrawerToggleButton  /> : <></>,
      headerRight: () => headerRightShown ? <View style={{flexDirection: 'row'}}><DarkModeToggleButton/><LanguageToggleButton/></View> : <></>,
      title
    }} />
}