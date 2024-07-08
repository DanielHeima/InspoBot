import { useThemeColor } from "@/src/hooks/useThemeColor"
import { ViewProps, View, ColorValue } from "react-native"

type ThemedTextProps = ViewProps & {
  lightBackground?: ColorValue,
  darkBackground?: ColorValue
};
export function ThemedView({ style, lightBackground, darkBackground, children, ...rest }: ThemedTextProps) {
  const backgroundColor = useThemeColor('background', { light: lightBackground, dark: darkBackground })
  return <View style={[style,
    { backgroundColor }]}
    {...rest}>
    {children}
  </View>
}