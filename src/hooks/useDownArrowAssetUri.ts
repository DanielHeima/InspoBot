import { useContext } from "react";
import { Image } from 'react-native';
import { ThemeContext } from "../context";

export function useDownArrowAssetURI() {
  const theme = useContext(ThemeContext).theme;
  if (theme === "dark") {
    return require('@/src/assets/down-arrow-circle-dark.svg');
  }
  return require('@/src/assets/down-arrow-circle-light.svg');
}