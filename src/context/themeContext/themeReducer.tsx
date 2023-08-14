import {Theme} from '@react-navigation/native';
type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  divideColor: string;
}
////LIGHT THEME
export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  divideColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#0dfa01',
    card: 'greem',
    text: 'pink',
    border: 'orange',
    notification: 'teal',
    background: '#8a9cf6',
  },
};

/////DARK THEME
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: false,
  divideColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#ff0084',
    card: 'greem',
    text: 'pink',
    border: 'orange',
    notification: 'teal',
    background: '#000000',
  },
};

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};
    default:
      state;
  }
};
