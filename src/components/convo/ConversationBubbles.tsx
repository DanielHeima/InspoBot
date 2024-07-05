import { View } from "react-native";
import { ConversationBubble } from "./ConversationBubble";
import React from "react";
import { TypingIndicator } from "./TypingIndicator";
import { styles } from "./Conversation";
import { Convo, ConvoBubble } from "@/src/types/model";

export function ConversationBubbles(
  { typeIndicatorEnabled, convo, convoBubbles }: 
  { typeIndicatorEnabled: boolean; convo: Convo, convoBubbles: ConvoBubble[] }) {
  return <>
    {convoBubbles.map((convoBubble, idx) => {
      return <View key={idx}>
        <ConversationBubble convoBubble={convoBubble} />
      </View>
    })}
    {typeIndicatorEnabled ? <TypingIndicator style={[styles.byBot]} /> : <></>}
  </>
}
