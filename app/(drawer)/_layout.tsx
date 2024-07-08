import { Drawer } from 'expo-router/drawer';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';


export default function DrawerLayout() {
  const backgroundColor = useThemeColor('primary');
  return (
    <Drawer
      screenOptions={{
        drawerStyle: [styles.drawerStyle, {backgroundColor: backgroundColor}],
        swipeEdgeWidth: 0,
        headerShown: false,
        drawerItemStyle: styles.drawerItemStyle as StyleProp<ViewStyle>
      }}>
      <Drawer.Screen
        name='home'
        options={{
          drawerLabel: 'Home'
        }}
      />
      <Drawer.Screen
        name='myconvos'
        options={{
          drawerLabel: 'My convos',
          title: 'My convos',
        }}
      />
      <Drawer.Screen
        name='settings'
        options={{
          drawerLabel: 'Settings',
          title: 'Settings'
        }}
      />
    </Drawer>
  );
}


const styles = StyleSheet.create({
  drawerStyle: {
    gap: 50,
  },
  drawerItemStyle: {
    fontSize: 30
  }
});


