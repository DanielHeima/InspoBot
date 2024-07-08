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
    text: '#48284a',
    icon: '#06bcc1',
    background: '#FFF7AE',
    primary: '#ffc6d9',
    secondary: '#ffe1c6',
    ternary: '#916c80'
  },
  dark: {
    text: '#e5dcc5',
    icon: 'pink',
    background: '#2d2d2a',
    primary: '#c14953',
    secondary: '#848fa5',
    ternary: '#4c4c47'
  }
}

// export const Colors: Colors = {
//   light: {
//     text: '#444',
//     icon: 'pink',
//     background: '#ffe',
//     primary: '#95deda',
//     secondary: '#edb9d8',
//     ternary: '#777'
//   },
//   dark: {
//     text: '#fff',
//     icon: 'pink',
//     background: '#111',
//     primary: '#444',
//     secondary: 'purple',
//     ternary: 'orange'
//   }
// }