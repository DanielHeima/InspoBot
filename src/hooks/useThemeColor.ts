import { useContext } from "react";
import { Colors } from "../constants/colors";
import { ThemeContext } from "../context";
import { ColorValue } from "react-native";

export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: ColorValue; dark?: ColorValue },
): ColorValue {
  const { theme } = useContext(ThemeContext);
  const colorFromProps = props?.[theme];
  if (colorFromProps) {
    return colorFromProps;
  }
  return Colors[theme][colorName]
}

export function useThemeColors() {
  const textColor = useThemeColor('text');
  const iconColor = useThemeColor('icon');
  const backgroundColor = useThemeColor('background');
  const primaryColor = useThemeColor('primary');
  const secondaryColor = useThemeColor('secondary');
  const ternaryColor = useThemeColor('ternary');

  return { textColor, iconColor, backgroundColor, primaryColor, secondaryColor, ternaryColor };
}