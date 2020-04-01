/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import AppNavigation from './app/navigations/AppNavigation'


const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6550c6',
    notification: "#0ACD73"
  }
}

const App: () => React$Node = () => {
  console.log(DefaultTheme)
  console.disableYellowBox = true;
  return (
     <PaperProvider theme={theme}>
      <AppNavigation />
     </PaperProvider>
  );
};

export default App;
