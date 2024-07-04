import { createContext, useState, ReactNode } from 'react';
import { Language, LanguageCxtType, Theme, ThemeCxtType } from './types/context';
import { useColorScheme } from 'react-native';

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

export const LanguageContext = createContext<LanguageCxtType>({
  language: 'is',
  setLanguage: () => {}
})

export const LanguageContextProvider = (props: React.PropsWithChildren): ReactNode => {
  const [language, setLanguage] = useState<Language>('is');
  const LanguageContextValue: LanguageCxtType = { language, setLanguage };

  return (
    <LanguageContext.Provider value={LanguageContextValue}>
      {props.children}
    </LanguageContext.Provider>
  )
}
