import { View } from "react-native";
import { DarkModeToggleButton } from "../buttons/DarkModeToggleButton";
import { LanguageToggleButton } from "../buttons/LanguageToggleButton";

export function HeaderRight() {
  return <View style={{ flexDirection: 'row' }}>
    <DarkModeToggleButton style={{ marginRight: 20 }} />
    <LanguageToggleButton />
  </View>
}