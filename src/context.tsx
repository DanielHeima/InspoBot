import { createContext, useState, ReactNode, useContext } from 'react';
import { Language, LanguageCxtType, SvgIconState, SvgIconStateCxtType, Theme, ThemeCxtType } from './types/context';
import { useColorScheme } from 'react-native';
import { moonUri, sunUri } from './constants/uri';

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

export const SvgIconStateContext = createContext<SvgIconStateCxtType>({
  svgIconState: { type: 'moon', uri: moonUri },
  setSvgIconState: () => {}
})

export const SvgIconStateContextProvider = (props: React.PropsWithChildren): ReactNode => {
  const [svgIconState, setSvgIconState] = useState<SvgIconState>({ type: 'moon', uri: moonUri });
  const SvgIconStateContextValue: SvgIconStateCxtType = { svgIconState, setSvgIconState };

  return (
    <SvgIconStateContext.Provider value={SvgIconStateContextValue}>
      {props.children}
    </SvgIconStateContext.Provider>
  )
}

// TODO svg ad haga ser skryngilega. Voru ohadir en context virdist gera illt verra
