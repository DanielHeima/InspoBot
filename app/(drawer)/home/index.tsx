import { router } from 'expo-router';
import { View, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useGreeting } from '@/src/hooks/useGreeting';
import { DrawerScreen } from '@/src/components/screen/DrawerScreen';
import { ThemedText } from '@/src/components/themed/ThemedText';
import { ThemedView } from '@/src/components/themed/ThemedView';
import { useLabel } from '@/src/hooks/useLabel';

export default function HomeScreen() {
  const user = 'Daníel';
  const greeting = useGreeting(user)
  return (
    <>
      <ThemedView style={styles.container}>
        <DrawerScreen title='InspoBot' />
        <ThemedText type={'title'} style={{ marginBottom: 100 }}>{greeting}</ThemedText>
        <ThemedText type={'subtitle'} style={{ marginBottom: 10 }}>{useLabel('homePressButtonBelow')}</ThemedText>
        <View><Button title='New convo' onPress={() => router.push('(drawer)/home/newconvo')}></Button></View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});