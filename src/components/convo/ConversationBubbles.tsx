import { View } from "react-native";
import { ConversationBubble } from "./ConversationBubble";
import React from "react";
import { TypingIndicator } from "./TypingIndicator";
import { ConvoBubble } from "@/src/types/model";
import { styles } from "./ConvoStyles";

export function ConversationBubbles(
  { typeIndicatorEnabled, convoBubbles }: 
  { typeIndicatorEnabled: boolean; convoBubbles: ConvoBubble[] }) {
  return <>
    {convoBubbles.map((convoBubble, idx) => {
      return <View key={idx}>
        <ConversationBubble convoBubble={convoBubble} />
      </View>
    })}
    {typeIndicatorEnabled ? <TypingIndicator style={[styles.byBot]} /> : <></>}
  </>
}
