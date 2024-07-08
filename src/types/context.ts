import { ThemeToggleSvgIconState } from "./icons";

export type Language = 'en'|'is';
export type LanguageCxtType = {
  language: Language,
  setLanguage: (newLanguage: Language) => void
}
export type Theme = 'light'|'dark';
export type ThemeCxtType = {
  theme: Theme,
  setTheme: (newTheme: Theme) => void
}
export type ThemeSvgIconState = ThemeToggleSvgIconState;
export type ThemeSvgIconStateCxtType = {
  svgIconState: ThemeToggleSvgIconState,
  setSvgIconState: (newSvgIconState: ThemeToggleSvgIconState) => void
}
