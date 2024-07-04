import { useContext } from "react";
import { Colors } from "../constants/colors";
import { Theme } from "../types/context";
import { ThemeContext } from "../context";
import { ColorValue } from "react-native";

export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: string; dark?: string },
): ColorValue {
  const { theme } = useContext(ThemeContext);
  const colorFromProps = props?.[theme];
  if (colorFromProps) {
    return colorFromProps;
  }
  return Colors[theme][colorName]
}