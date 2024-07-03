import { Text, StyleSheet, View } from "react-native";
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Page() {
  return (
    <View style={styles.container}>
      <Drawer.Screen options={{ headerShown: true, title: 'Settings', headerLeft: () => <DrawerToggleButton/>}} />
      <Text style={{ fontSize: 24 }}>
        Index page of Settings Drawer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});