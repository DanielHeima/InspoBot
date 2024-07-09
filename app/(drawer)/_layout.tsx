import { Drawer } from 'expo-router/drawer';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { useLabel } from '@/src/hooks/useLabel';


export default function DrawerLayout() {
  const backgroundColor = useThemeColor('primary');
  return (
    <Drawer
      screenOptions={{
        drawerStyle: [styles.drawerStyle, { backgroundColor: backgroundColor }],
        swipeEdgeWidth: 0,
        headerShown: false,
        drawerItemStyle: styles.drawerItemStyle as StyleProp<ViewStyle>
      }}>
      <Drawer.Screen
        name='home'
        options={{
          drawerLabel: useLabel('navHome')
        }}
      />
      <Drawer.Screen
        name='myconvos'
        options={{
          drawerLabel: useLabel('navMyConvos'),
        }}
      />
      <Drawer.Screen
        name='settings'
        options={{
          drawerLabel: useLabel('navSettings'),
        }}
      />
      <Drawer.Screen
        name='support'
        options={{
          drawerLabel: useLabel('navSupport'),
        }}
      />
    </Drawer>
  );
}


const styles = StyleSheet.create({
  drawerStyle: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  drawerItemStyle: {
    fontSize: 30
  }
});


