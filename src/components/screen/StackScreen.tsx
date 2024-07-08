import { useThemeColor } from '@/src/hooks/useThemeColor';
import { Stack } from 'expo-router';
import { HeaderBackground } from './HeaderBackground';
import { HeaderRight } from './HeaderRight';
import { ReactNode } from 'react'

type StackScreenType = {
  title: string;
  headerRightShown?: boolean,
  showLangToggle?: boolean,
  showThemeToggle?: boolean,
  HeaderRightProp?: () => ReactNode
}
export function StackScreen({ title, headerRightShown = true, HeaderRightProp, ...rest }: StackScreenType) {
  const headerColor = useThemeColor('primary');
  return <Stack.Screen options={{
    headerShown: true,
    headerBackground: () => <HeaderBackground headerColor={headerColor}/>,
    headerRight: () => headerRightShown ? (HeaderRightProp? <><HeaderRightProp/><HeaderRight {...rest} /></> : <HeaderRight {...rest} />) : <></>,
    title
  }} />
}