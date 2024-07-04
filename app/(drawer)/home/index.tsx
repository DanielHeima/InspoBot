import { DrawerToggleButton } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer'
import { View, Text, StyleSheet, ColorValue } from 'react-native';
import { useThemeColor } from '../../../src/hooks/useThemeColor';
import { useGreeting } from '../../../src/hooks/useGreeting';
import React from 'react';
import { DrawerScreen } from '../../../src/components/drawer/DrawerScreen';

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
        <Text style={{ fontSize: 24, color: textColor }}>{greeting}</Text>
        <Text style={{ fontSize: 24, color: textColor }}>Press here to start a new convo.</Text>
        <Link href='(drawer)/home/newconvo'>Takki</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  }
});