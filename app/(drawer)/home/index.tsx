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

export default function HomeScreen() {
  const backgroundColor: ColorValue = useThemeColor('background');
  const textColor: ColorValue = useThemeColor('text');
  const user = 'Daníel';
  const greeting = useGreeting(user)
  console.log(backgroundColor, textColor);
  return (
    <>
      <View style={[styles.container, { backgroundColor }]}>
        <DrawerScreen title='InspoBot'/>
        <Text style={{ fontSize: 24, color: textColor , marginBottom: 100}}>{greeting}</Text>
        <Text style={{ fontSize: 24, color: textColor }}>Press the button below to start a new convo.</Text>
        <Button title='New convo' onPress={() => router.push('(drawer)/home/newconvo')}/>
        <View style={{flexDirection: 'row'}}><View style={{marginRight: 20}}><DarkModeToggleButton/></View><LanguageToggleButton/></View>
      </View>
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