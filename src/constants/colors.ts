import { ColorValue } from "react-native"

interface Colors  {
  light: {
    text: ColorValue;
    icon: ColorValue;
    background: ColorValue;
    primary: ColorValue;
    secondary: ColorValue;
    ternary: ColorValue;
    
  };
  dark: {
    text: ColorValue;
    icon: ColorValue;
    background: ColorValue;
    primary: ColorValue;
    secondary: ColorValue;
    ternary: ColorValue;
  };
}

export const Colors: Colors = {
  light: {
    text: '#444',
    icon: 'pink',
    background: '#ffe',
    primary: '#95deda',
    secondary: '#edb9d8',
    ternary: '#777'
  },
  dark: {
    text: '#fff',
    icon: 'pink',
    background: '#111',
    primary: '#444',
    secondary: 'purple',
    ternary: 'orange'
  }
}