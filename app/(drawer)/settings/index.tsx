import { Text, StyleSheet, View } from "react-native";
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerScreen } from "@/src/components/screen/DrawerScreen";
import { ThemedText } from "@/src/components/themed/ThemedText";

export default function Page() {
  return (
    <View style={styles.container}>
      <DrawerScreen headerRightShown={false} title={'Settings'} />
      <ThemedText>
        Index page of Settings Drawer
      </ThemedText>
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