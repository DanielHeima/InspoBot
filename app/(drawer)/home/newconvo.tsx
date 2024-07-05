import { ThemedView } from '@/src/components/themed/ThemedView';
import { BotType, ConvoHrefObject } from '@/src/types/convo';
import { Stack, Link } from 'expo-router';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BotCardProps = {
  botType: BotType
}

export default function NewConvoScreen() {
  const DATA: BotCardProps[] = [
    {
      botType: 'therapist'
    },
    {
      botType: 'therapist'
    },
    {
      botType: 'therapist'
    },
    {
      botType: 'therapist'
    },
    {
      botType: 'therapist'
    },
    {
      botType: 'therapist'
    },
    {
      botType: 'therapist'
    },
    {
      botType: 'therapist'
    }
  ]
  return (<>
    <Stack.Screen options={{ headerShown: true, title: "New convo" }} />
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <BotCard botType={item.botType} />}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal={true}
      />
      <Text>Or go to an older conversation...</Text>
    </SafeAreaView>
  </>
  );
}

function BotCard(props: BotCardProps) {
  const hrefObject: ConvoHrefObject = {
    pathname: '/(drawer)/home/convo/[convoId]',
    params: { convoId: 'new', botType: props.botType }
  }
  return <Link
    replace
    href={hrefObject}>
    <ThemedView darkBackground={'purple'} lightBackground={'pink'} style={{ margin: 5, padding: 5 }}>
      <Image style={{ margin: 2, padding: 0, resizeMode: 'cover', width: 300, height: 300 }} source={require('@/src/assets/FDRN9ISGZ38J94Q.webp')} />
      <Text>Therapist</Text>
    </ThemedView>
  </Link>
}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'column',
    // alignItems: "center",
    justifyContent: "center",
    // flexWrap: 'wrap'
  }
});