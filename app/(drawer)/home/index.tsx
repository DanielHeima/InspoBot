import { router } from 'expo-router';
import { View, StyleSheet, Button, Text } from 'react-native';
import React from 'react';
import { useGreeting } from '@/src/hooks/useGreeting';
import { DrawerScreen } from '@/src/components/screen/DrawerScreen';
import { ThemedText } from '@/src/components/themed/ThemedText';
import { ThemedView } from '@/src/components/themed/ThemedView';
import { useLabel } from '@/src/hooks/useLabel';

export default function HomeScreen() {
  const user = 'Daníel';
  const greeting = useGreeting(user);

  return (
    <>
      <ThemedView style={styles.container}>
        <DrawerScreen title='InspoBot' showThemeToggle={true} showLangToggle={true} />
        <ThemedText type={'title'} style={{ marginBottom: 100 }}>{greeting}</ThemedText>
        <ThemedText>{useLabel('homePressButtonBelow')}</ThemedText>
        <View style={{ marginTop: 40 }}><Button title={'TODO BREYTA  new convo'} onPress={() => router.push('(drawer)/home/newconvo')}></Button></View>
        
        {/** // TODO visible ef til stadar */}
        <ThemedText style={{ marginTop: 40 }} type={'subtitle'}>{useLabel('homeGoToOlder')}</ThemedText> 
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
});