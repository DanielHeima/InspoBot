import { StackScreen } from '@/src/components/screen/StackScreen';
import { ThemedView } from '@/src/components/themed/ThemedView';
import { useLabel } from '@/src/hooks/useLabel';
import { BotType, ConvoHrefObject } from '@/src/types/convo';
import { Link } from 'expo-router';
import { Text, StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BotCardProps = {
  botType: BotType
}

const DATA: { botType: BotType}[]= [
  {
    botType: 'therapist',
  },
  {
    botType: 'inspirational'
  }

]

export default function NewConvoScreen() {

  return (<>
    <StackScreen
      showLangToggle={true}
      showThemeToggle={true}
      headerRightShown={true}
      title={useLabel('navNewConvo')} />
    <SafeAreaView style={styles.container}>
      <Text>Spjalla við hráan botta</Text>
      <BotCard botType={'raw'} />
      <Text>Eða veldu einhvern af þessum: </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <BotCard botType={item.botType} />}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal={true}
      />
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
    href={hrefObject}>
    <ThemedView darkBackground={'purple'} lightBackground={'pink'} style={{ margin: 5, padding: 5 }}>
      <Image style={{ margin: 2, padding: 0, resizeMode: 'cover', width: 300, height: 300 }} source={require('@/src/assets/FDRN9ISGZ38J94Q.webp')} />
      <Text>{props.botType}</Text>
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