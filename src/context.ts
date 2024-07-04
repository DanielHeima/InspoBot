import { createContext } from 'react';
import { Theme } from './types/theme';

export type ThemeCxtType = {
  theme: Theme,
  setTheme: (currentTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeCxtType>({
  theme: 'light',
  setTheme: () => {}
});
