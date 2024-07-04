import { Button } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { useToggleTheme } from "../../hooks/useToggleTheme";

export function DarkModeToggleButton() {
  const toggleTheme = useToggleTheme();
 
  return <Button
    onPress={toggleTheme}
    title='Toggle theme'
    color={useThemeColor('primary')}
  />
}