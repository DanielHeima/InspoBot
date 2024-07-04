import { createContext, useState, ReactNode } from 'react';
import { Language, Theme } from './types/context';
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

export type LanguageCxtType = {
  language: Language,
  setLanguage: (newLanguage: Language) => void
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
