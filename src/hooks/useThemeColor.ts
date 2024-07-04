import { useContext } from "react";
import { Colors } from "../constants/colors";
import { Theme } from "../types/context";
import { ThemeContext } from "../context";

export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { theme } = useContext(ThemeContext);
  return Colors[theme][colorName]
}