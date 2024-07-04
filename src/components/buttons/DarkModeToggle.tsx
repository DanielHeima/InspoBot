import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Button } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { useToggleTheme } from "../../hooks/useToggleTheme";
export function DarkModeToggle() {

  return <Button
    onPress={useToggleTheme}
    title='Toggle theme'
    color={useThemeColor('primary')}
  />
}