import { useContext } from "react";
import { ThemeContext } from "../context";

export function useToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === 'light';
  if (isLight) {
    return () => setTheme('dark');
  }
  return () => setTheme('light');
}