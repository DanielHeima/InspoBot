import { createContext, useState, ReactNode, useEffect } from 'react';
import { Language, LanguageCxtType, ThemeSvgIconState, ThemeSvgIconStateCxtType, Theme, ThemeCxtType } from './types/context';
import { useColorScheme } from 'react-native';
import { moonUri, sunUri } from './constants/uri';
import { getAsyncStorage } from './storage/asyncstorage/asyncstorage';

export const ThemeContext = createContext<ThemeCxtType>({
  theme: 'light',
  setTheme: () => { }
})

export const ThemeContextProvider = (props: React.PropsWithChildren): ReactNode => {
  const [theme, setTheme] = useState<Theme>(useColorScheme() ?? 'light');
  const ThemeContextValue: ThemeCxtType = { theme, setTheme };

  useEffect(() => {
    let update = true;

    const getStoredTheme = async () => {
      const storedTheme: 'dark' | 'light' | null = await getAsyncStorage('global_theme');
      console.log('stored theme', storedTheme);
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }

    if (!update) return;
    getStoredTheme();

    return () => { update = false }
  }, [])

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const LanguageContext = createContext<LanguageCxtType>({
  language: 'is',
  setLanguage: () => { }
})

export const LanguageContextProvider = (props: React.PropsWithChildren): ReactNode => {
  const [language, setLanguage] = useState<Language>('en');
  const LanguageContextValue: LanguageCxtType = { language, setLanguage };
  
  useEffect(() => {
    let update = true;

    const getStoredLang = async () => {
      const storedLang: 'en' | 'is' | null = await getAsyncStorage('global_lang');
      console.log('stored lang (provider)', storedLang);
      if (storedLang === 'is') {
        setLanguage('is')
      }
    }

    if (!update) return;
    getStoredLang();

    return () => { update = false }
  }, [])

  return (
    <LanguageContext.Provider value={LanguageContextValue}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export const ThemeSvgIconStateContext = createContext<ThemeSvgIconStateCxtType>({
  svgIconState: { type: 'moon', uri: moonUri },
  setSvgIconState: () => { }
})

export const SvgIconStateContextProvider = (props: React.PropsWithChildren): ReactNode => {
  const [svgIconState, setSvgIconState] = useState<ThemeSvgIconState>({ type: 'moon', uri: moonUri });
  const SvgIconStateContextValue: ThemeSvgIconStateCxtType = { svgIconState, setSvgIconState };

  useEffect(() => {
    let update = true;

    const getStoredTheme = async () => {
      const storedTheme: 'dark' | 'light' | null = await getAsyncStorage('global_theme');
      console.log('stored theme (icon)', storedTheme);
      if (storedTheme === "light") {
        setSvgIconState({ type: 'sun', uri: sunUri });
      }
    }

    if (!update) return;
    getStoredTheme();

    return () => { update = false }
  }, [])

  return (
    <ThemeSvgIconStateContext.Provider value={SvgIconStateContextValue}>
      {props.children}
    </ThemeSvgIconStateContext.Provider>
  )
}
