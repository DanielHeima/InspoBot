import { useContext } from "react";
import { LightDarkToggle } from "react-light-dark-toggle";
import { ThemeContext } from "../../context";
import { Button } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
export function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === 'light';
  const switchTheme = (isLight: boolean) => {
    if (isLight) {
      setTheme('dark');
      return;
    }

    setTheme('light');
  }
  return <Button
    onPress={() => switchTheme(isLight)}
    title='Toggle theme'
    color={useThemeColor('primary')}
  />
}