import { DrawerToggleButton } from '@react-navigation/drawer';
import { Link, router } from 'expo-router';
import { Drawer } from 'expo-router/drawer'
import { View, Text, StyleSheet, ColorValue, Button } from 'react-native';
import { useThemeColor } from '../../../src/hooks/useThemeColor';
import { useGreeting } from '../../../src/hooks/useGreeting';
import React from 'react';
import { DrawerScreen } from '../../../src/components/drawer/DrawerScreen';
import { DarkModeToggleButton } from '@/src/components/buttons/DarkModeToggleButton';
import { LanguageToggleButton } from '@/src/components/buttons/LanguageToggleButton';
import { ThemedText } from '@/src/components/themed/ThemedText';
import { ThemedView } from '@/src/components/themed/ThemedView';

export default function HomeScreen() {
  const user = 'Daníel';
  const greeting = useGreeting(user)
  return (
    <>
      <ThemedView style={styles.container}>
        <DrawerScreen title='InspoBot'/>
        <ThemedText type={'title'} style={{marginBottom: 100}}>{greeting}</ThemedText>
        <ThemedText type={'subtitle'} style={{marginBottom: 10}}>Press the button below to start a new convo.</ThemedText>
        <View style={{}}><Button title='New convo' onPress={() => router.push('(drawer)/home/newconvo')}></Button></View>
        <View style={{position: 'absolute', bottom: 50, flexDirection: 'row'}}><View style={{marginRight: 20}}><DarkModeToggleButton/></View><LanguageToggleButton/></View>
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