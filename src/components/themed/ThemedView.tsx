import { useThemeColor } from "@/src/hooks/useThemeColor"
import { ViewProps, View } from "react-native"

type ThemedTextProps = ViewProps & {
  lightBackground?: string,
  darkBackground?: string
};
export function ThemedView({ style, lightBackground, darkBackground, children, ...rest }: ThemedTextProps) {
  const backgroundColor = useThemeColor('background', { light: lightBackground, dark: darkBackground })
  return <View style={[style,
    { backgroundColor }]}
    {...rest}>
    {children}
  </View>
}