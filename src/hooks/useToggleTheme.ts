import { useContext } from "react";
import { ThemeContext } from "../context";

export function useToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === 'light';
  if (isLight) {
    setTheme('dark');
    return;
  }
  setTheme('light');
}