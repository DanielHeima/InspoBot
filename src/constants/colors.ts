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
    text: '#000',
    icon: 'pink',
    background: 'lightgray',
    primary: 'blue',
    secondary: '#123',
    ternary: '#123'
  },
  dark: {
    text: '#fff',
    icon: 'pink',
    background: '#111',
    primary: '#123',
    secondary: '#123',
    ternary: '#123'
  }
}