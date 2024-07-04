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
    primary: 'lightblue',
    secondary: 'pink',
    ternary: 'black'
  },
  dark: {
    text: '#fff',
    icon: 'pink',
    background: '#111',
    primary: 'orange',
    secondary: 'purple',
    ternary: 'white'
  }
}