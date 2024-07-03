import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from 'expo-router/drawer';
import { View, Text, StyleSheet, StyleProp, ViewStyle, Settings } from 'react-native';


export default function DrawerLayout(props: any) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* {true  ?  <></> : ( */}
      <Drawer
        screenOptions={{
          drawerStyle: styles.drawerStyle,
          swipeEdgeWidth : 0,
          headerShown: false,
          drawerItemStyle: styles.drawerItemStyle

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
      {/* )} */}
    </GestureHandlerRootView >
  );
}


const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: 'pink',
  },
  drawerItemStyle: {
    
  }
});


