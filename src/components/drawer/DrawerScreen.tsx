import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer'
import { View, Text, StyleSheet, ColorValue, StyleProp, ViewStyle } from 'react-native';
import { DarkModeToggleButton } from '../buttons/DarkModeToggleButton';
import { LanguageToggleButton } from '../buttons/LanguageToggleButton';
import { ThemedView } from '../themed/ThemedView';
import { useThemeColor } from '@/src/hooks/useThemeColor';

type DrawerScreenType = {
  title: string;
  headerLeftShown?: boolean;
  headerRightShown?: boolean;
}
export function DrawerScreen({ title, headerLeftShown = true, headerRightShown = true }: DrawerScreenType) {
  const headerColor = useThemeColor('primary');
  return <Drawer.Screen options={{
    headerShown: true,
    headerBackground: () => <ThemedView
      style={{ width: '100%', height: '100%' }}
      lightBackground={headerColor}
      darkBackground={headerColor}>
    </ThemedView>,
    headerLeft: () => headerLeftShown ? <DrawerToggleButton /> : <></>,
    headerRight: () => headerRightShown ? <View style={{ flexDirection: 'row' }}>
      <DarkModeToggleButton />
      {/* <LanguageToggleButton/> */}
    </View> : <></>,
    title
  }} />
}