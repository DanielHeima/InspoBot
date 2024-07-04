import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Theme } from '../src/types/theme';
import { ThemeContext, ThemeCxtType } from '../src/context';
import { useColorScheme } from 'react-native';
import { View,Text } from 'react-native';

export default function RootLayout() {
  const [theme, setTheme] = useState<Theme>(useColorScheme() ?? 'light');
  console.log(theme);
  const ThemeContextValue: ThemeCxtType = { theme, setTheme };
  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider >
    </ThemeContext.Provider>
  );
}
