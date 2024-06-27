import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Link, Stack } from 'expo-router';


export default function DrawerLayout(props: any) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: styles.drawerStyle
          
        }}>
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: 'Home',
            title: 'InspoBot',
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
            title: 'Settings',
          }}
        />
      </Drawer>
    </GestureHandlerRootView >
  );
}

const drawerStyle: StyleProp<ViewStyle> = {
  backgroundColor: 'blue'
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: 'pink'
  },
});


