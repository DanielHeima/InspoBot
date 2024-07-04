import { View, Image, Text, StyleSheet, TextInput, ViewProps, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ConvoHrefSearchParams } from '@/src/types/convo';
import { getFirstPromptByBotType } from '@/src/constants/prompts';
import { ScrollView } from 'react-native-gesture-handler';
import { Convo, ConvoBubble, User } from '@/src/types/model';
import { randomUUID } from 'expo-crypto';
import { PropsWithChildren, useContext, useRef, useState } from 'react';
import { ThemedText } from '@/src/components/themed/ThemedText';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { SvgUri } from 'react-native-svg'
import { ThemeContext } from '@/src/context';
import { useDownArrowAssetURI } from '@/src/hooks/useDownArrowAssetUri';
import { DOWN_ARROW_ASSET_DARK, DOWN_ARROW_ASSET_LIGHT } from '@/src/constants/uri';

export default function ConvoScreen() {
  let { convoId, botType } = useLocalSearchParams<ConvoHrefSearchParams>();
  const pageTitle = botType ? `Convo with an AI ${botType}` : 'Convo with an AI bot'

  if (convoId === 'new' || !convoId) {
    convoId = randomUUID();
  }
  console.log(convoId);

  if (!botType) {
    botType = 'therapist'
  }

  const firstPrompt = getFirstPromptByBotType(botType);

  const dummyUser: User = {
    id: randomUUID(),
    name: 'Daníel Helgi Ágústsson'
  }

  const convo: Convo = {
    id: convoId,
    botType: 'therapist',
    user: dummyUser
  }

  const convoBubbles: ConvoBubble[] = [
    {
      convoId,
      createdAt: new Date("2024-07-04T12:50:21.817Z"),
      text: 'Hello. How may I help you?',
      byBot: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:51:21.817Z"),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      byUser: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:52:21.817Z"),
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      byBot: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:53:21.817Z"),
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      byUser: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:54:21.817Z"),
      text: 'Hello. How may I help you?',
      byBot: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:55:21.817Z"),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      byUser: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:56:21.817Z"),
      text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      byBot: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T13:02:21.817Z"),
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      byUser: true
    },
  ]

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: pageTitle }} />
      <Conversation convo={convo} convoBubbles={convoBubbles} />
    </>
  );
}

function Conversation(props: { convo: Convo, convoBubbles: ConvoBubble[] }) {
  const { convo, convoBubbles } = props;
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [bubbles, setBubbles] = useState<ConvoBubble[]>(convoBubbles);
  const primaryColor = useThemeColor('primary');
  const secondaryColor = useThemeColor('secondary');
  const ternaryColor = useThemeColor('ternary');
  const iconColor = useThemeColor('icon');

  const scrollToEnd = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true })
  }
  const clearTextInput = () => {
    textInputRef.current?.clear();
  }

  const onSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    scrollToEnd();
    console.log(e.nativeEvent.text);
    const newText = e.nativeEvent.text;
    if (!newText) {
      return;
    }
    const newBubble: ConvoBubble = {
      convoId: convo.id,
      text: newText,
      byUser: true,
      createdAt: new Date()
    }

    setBubbles((oldBubbles) => {
      return [...oldBubbles, newBubble]
    })
    clearTextInput();
  }

  const arrowUri = Image.resolveAssetSource(useDownArrowAssetURI()).uri;
console.log(arrowUri);
  return <>
    <ScrollView
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
    >
      <ConversationBubbles convo={convo} convoBubbles={bubbles} />
    </ScrollView>
    <View>
      <View style={{position: 'absolute', bottom: 100}}>
        <SvgUri fill={primaryColor} width={50} height={50} uri={arrowUri} />
      </View>
      <TextInput ref={textInputRef} onSubmitEditing={onSubmitEditing} style={{ fontSize: 24, padding: 10, height: 60, backgroundColor: primaryColor, borderColor: ternaryColor, borderWidth: 1, borderStyle: 'solid' }} placeholderTextColor={ternaryColor} placeholder={'Type your message here...'} />
    </View>
  </>
}

function ConversationBubbles(props: { convo: Convo, convoBubbles: ConvoBubble[] }) {
  const { convo, convoBubbles } = props;
  return convoBubbles.map((convoBubble, idx) => {
    return <View key={idx}><ConversationBubble convoBubble={convoBubble} /></View>
  })
}

function ConversationBubble(props: { convoBubble: ConvoBubble }) {
  const { convoBubble } = props;
  const primaryColor = useThemeColor('primary');
  const secondaryColor = useThemeColor('secondary');

  return <View style={[convoBubble.byBot ? [styles.byBot, { backgroundColor: secondaryColor }] : [styles.byUser, { backgroundColor: primaryColor }], styles.convoBubble]}><ThemedText>{convoBubble.text}</ThemedText></View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10
  },
  convoBubble: {
    margin: 5,
    maxWidth: '80%',
    padding: 30,
    borderRadius: 50,
  },
  byBot: {
    alignSelf: 'flex-start'
  },
  byUser: {
    alignSelf: 'flex-end'
  }
})