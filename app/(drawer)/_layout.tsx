import { Drawer } from 'expo-router/drawer';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { useLabel } from '@/src/hooks/useLabel';


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
          drawerLabel: useLabel('navHome')
        }}
      />
      <Drawer.Screen
        name='myconvos'
        options={{
          drawerLabel: useLabel('navMyConvos'),
          title: useLabel('navMyConvos'),
        }}
      />
      <Drawer.Screen
        name='settings'
        options={{
          drawerLabel: useLabel('navSettings'),
          title: useLabel('navSettings')
        }}
      />
      <Drawer.Screen
        name='support'
        options={{
          drawerLabel: useLabel('navSupport'),
          title: useLabel('navSupport')
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


