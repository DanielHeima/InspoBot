import { useThemeColor } from "@/src/hooks/useThemeColor";
import { ConvoBubble } from "@/src/types/model";
import { View } from "react-native";
import { ThemedText } from "../themed/ThemedText";
import { styles } from "./Conversation";

export function ConversationBubble(
  { convoBubble }: 
  { convoBubble: ConvoBubble }) {
  const primaryColor = useThemeColor('primary');
  const secondaryColor = useThemeColor('secondary');

  return <View style={[convoBubble.byBot ? [styles.byBot, { backgroundColor: secondaryColor }] : [styles.byUser, { backgroundColor: primaryColor }], styles.convoBubble]}>
    <ThemedText>
      {convoBubble.text}
    </ThemedText>
  </View>
}
