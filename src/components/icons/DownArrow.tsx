import { useState } from "react";
import { ColorValue, Pressable, View } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { SvgUri } from "react-native-svg";

export function DownArrow({ isEnabled, color, arrowUri, scrollToEnd }: { isEnabled: boolean, color: ColorValue, arrowUri: string, scrollToEnd: () => void }) {
  const [pressed, setPressed] = useState(false);
  if (!isEnabled) {
    return <></>
  }
  return <View style={[{position: 'absolute', bottom: 70, alignItems: 'center', width: '100%'},  pressed ? { opacity: 0.5 } : undefined]}>
    <Pressable onPress={() => {
      console.log('pressed');
      setPressed(true);
      scrollToEnd()
      setTimeout(() => {
        setPressed(false);
      }, 1000);
    }} >
      <SvgUri
        fill={color}
        width={50}
        height={50}
        uri={arrowUri} />
    </Pressable >
  </View>
}