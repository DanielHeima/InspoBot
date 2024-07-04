import { createContext, useState, ReactNode } from 'react';
import { Theme } from './types/theme';
import { useColorScheme } from 'react-native';


export type ThemeCxtType = {
  theme: Theme,
  setTheme: (newTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeCxtType>({
  theme: 'light',
  setTheme: () => {}
})

export const ThemeContextProvider = (props: React.PropsWithChildren): ReactNode => {
  const [theme, setTheme] = useState<Theme>(useColorScheme() ?? 'light');
  const ThemeContextValue: ThemeCxtType = { theme, setTheme };

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}
