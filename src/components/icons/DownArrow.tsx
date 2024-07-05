import { ColorValue, Pressable, View } from "react-native";
import { SvgUri } from "react-native-svg";

export function DownArrow({ isEnabled, color, arrowUri, scrollToEnd }: { isEnabled: boolean, color: ColorValue, arrowUri: string, scrollToEnd: () => void }) {
  if (!isEnabled) {
    return <></>
  }
  return <View style={{ position: 'absolute', bottom: 70, alignItems: 'center', width: '100%', }}>
    <Pressable onPress={() => {
      console.log('pressed');
      scrollToEnd()
    }
    }>
      <SvgUri
        fill={color}
        width={50}
        height={50}
        uri={arrowUri} />
    </Pressable >
  </View>
}