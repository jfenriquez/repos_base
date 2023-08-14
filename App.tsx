/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet} from 'react-native';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

/////CUSTOM THEME
/* const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#084F6A',

    card: '#',
    text: '#',
    border: '#',
    notification: '#',
    background: '#084',
  },
}; */

function App(): JSX.Element {
  return (
    <AppState>
      <Navigator></Navigator>
    </AppState>
  );
}

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
