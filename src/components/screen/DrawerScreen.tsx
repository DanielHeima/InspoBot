import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { HeaderBackground } from './HeaderBackground';
import { HeaderRight } from './HeaderRight';

type DrawerScreenType = {
  title: string;
  headerLeftShown?: boolean;
  headerRightShown?: boolean,
  showLangToggle?: boolean,
  showThemeToggle?: boolean;
}
export function DrawerScreen({ title, headerLeftShown = true, headerRightShown = true, ...rest }: DrawerScreenType) {
  const headerColor = useThemeColor('primary');
  return <Drawer.Screen options={{
    headerShown: true,
    headerBackground: () => <HeaderBackground headerColor={headerColor}/>,
    headerLeft: () => headerLeftShown ? <DrawerToggleButton /> : <></>,
    headerRight: () => headerRightShown ? <HeaderRight {...rest} /> : <></>,
    title
  }} />
}


