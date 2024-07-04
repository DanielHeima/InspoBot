import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { LanguageContextProvider, ThemeContextProvider } from '../src/context';


export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider >
      </LanguageContextProvider>
    </ThemeContextProvider>

  );
}
