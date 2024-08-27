/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';


import StackNavigator from './navigation/stack';
import { Text } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <BottomSheetModalProvider>
      <StackNavigator />
    </BottomSheetModalProvider>
  );
}


export default App;
