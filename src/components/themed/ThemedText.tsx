import { ThemeContext } from "@/src/context"
import { useThemeColor } from "@/src/hooks/useThemeColor"
import { useContext } from "react"
import { ColorValue, Text, TextProps, StyleSheet } from "react-native"

type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'subtitle'
  light?: string,
  dark?: string
};
export function ThemedText({ style, type = 'default', light, dark, children, ...rest }: ThemedTextProps) {
  const color = useThemeColor('text', { light, dark })
  return <Text style={[style,
    { color },
    type === 'default' ? styles.default : undefined,
    type === 'subtitle' ? styles.subtitle : undefined,
    type === 'title' ? styles.title : undefined]}
    {...rest}>
    {children}
  </Text>
}

const styles = StyleSheet.create({
  default: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 100
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  }
})