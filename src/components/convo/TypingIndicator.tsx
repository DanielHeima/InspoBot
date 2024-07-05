import { View, Image, StyleProp, ViewStyle } from "react-native";

export function TypingIndicator({ style }: { style: StyleProp<ViewStyle> }) {
  return <View style={style}>
    <Image style={{ margin: 2, padding: 0, resizeMode: 'contain', width: 100, height: 100 }} source={require('@/src/assets/typing-indicator1.gif')} />
  </View>
}