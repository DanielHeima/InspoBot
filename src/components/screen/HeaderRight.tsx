import { View } from "react-native";
import { DarkModeToggleButton } from "../buttons/DarkModeToggleButton";
import { LanguageToggleButton } from "../buttons/LanguageToggleButton";

export function HeaderRight({ showThemeToggle, showLangToggle }: { showThemeToggle?: boolean, showLangToggle?: boolean }) {
  return <View style={{ flexDirection: 'row' }}>
    {showThemeToggle ? <DarkModeToggleButton style={showLangToggle ? { marginRight: 20 } : undefined} /> : <></>}
    {showLangToggle ? <LanguageToggleButton /> : <></>}
  </View>
}