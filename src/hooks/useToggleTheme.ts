import { useContext } from "react";
import { ThemeContext } from "../context";
import { storeAsyncStorage } from "../storage/asyncstorage/asyncstorage";

export function useToggleTheme(): () => void {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === 'light';
  if (isLight) {
    return () => {
      setTheme('dark');
      storeAsyncStorage('global_theme', 'dark');
    }
  }
  return () => {
    setTheme('light');
    storeAsyncStorage('global_theme', 'light');
  }
}