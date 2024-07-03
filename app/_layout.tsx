import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function RootLayout() {
  const isLoggedIn = false;
  return (
    <SafeAreaProvider>
      {/* <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack> */}
        {isLoggedIn ? 
         <Stack>
           <Stack.Screen name="index" options={{ headerShown: false }} />
           <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
         </Stack> :
         <Stack>
           <Stack.Screen name="login" options={{ headerShown: false }} />
         </Stack>}
        {/* <View>
        <Link href='/convo'>Convo</Link>
        <Link href='/login'>login</Link>
        <Link href='/newconvo'>New convo</Link>
      </View> */}
    </SafeAreaProvider >
  );
}
