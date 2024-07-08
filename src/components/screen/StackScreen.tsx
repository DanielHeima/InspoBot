import { useThemeColor } from '@/src/hooks/useThemeColor';
import { Stack } from 'expo-router';
import { HeaderBackground } from './HeaderBackground';
import { HeaderRight } from './HeaderRight';

type StackScreenType = {
  title: string;
  headerRightShown?: boolean;
}
export function StackScreen({ title, headerRightShown = true }: StackScreenType) {
  const headerColor = useThemeColor('primary');
  return <Stack.Screen options={{
    headerShown: true,
    headerBackground: () => <HeaderBackground headerColor={headerColor}/>,
    headerRight: () => headerRightShown ? <HeaderRight /> : <></>,
    title
  }} />
}