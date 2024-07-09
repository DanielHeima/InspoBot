import { StyleSheet, View } from "react-native";
import { DrawerScreen } from "@/src/components/screen/DrawerScreen";
import { ThemedText } from "@/src/components/themed/ThemedText";
import { useLabel } from "@/src/hooks/useLabel";
import { ThemedView } from "@/src/components/themed/ThemedView";

export default function Page() {
  return (
    <ThemedView style={styles.container}>
      <DrawerScreen showLangToggle={true} showThemeToggle={true} headerRightShown={true} title={useLabel('navSettings')} />
      <ThemedText>
        Index page of Settings Drawer
      </ThemedText>
    </ThemedView>
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