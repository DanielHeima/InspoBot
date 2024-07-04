import { View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ConvoHrefSearchParams } from '@/src/types/convo';
import { getFirstPromptByBotType } from '@/src/constants/prompts';

export default function ConvoScreen() {
  const { convoId, botType } = useLocalSearchParams<ConvoHrefSearchParams>();
  const pageTitle = botType ? `Convo with an AI ${botType}` : 'Convo with an AI bot'

  if (!botType) {
    return <></>
  }

  const firstPrompt = getFirstPromptByBotType(botType);

  return (
    <>
      <View>
        <Stack.Screen options={{ headerShown: true, title: pageTitle}} />
        <Text>{firstPrompt}</Text>
        <Text>{convoId}</Text>
        <Text>{botType}</Text>
      </View>
    </>
  );
}