import { useContext } from "react";
import { COLORS } from "../constants/colors";
import { ThemeContext } from "../context";
import { ColorValue } from "react-native";

export function useThemeColor(
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark,
  props?: { light?: ColorValue; dark?: ColorValue },
): ColorValue {
  const { theme } = useContext(ThemeContext);
  const colorFromProps = props?.[theme];
  if (colorFromProps) {
    return colorFromProps;
  }
  return COLORS[theme][colorName]
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