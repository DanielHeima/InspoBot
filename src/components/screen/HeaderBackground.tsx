import { ColorValue } from "react-native";
import { ThemedView } from "../themed/ThemedView";

export function HeaderBackground(
  { headerColor }: 
  { headerColor?: ColorValue}) {
  return <ThemedView
      style={{ width: '100%', height: '100%' }}
      lightBackground={headerColor}
      darkBackground={headerColor}>
    </ThemedView>
}