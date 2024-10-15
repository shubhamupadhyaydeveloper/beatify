import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Appstack from './tab'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './navigaionutils';

import SplashScreen from 'src/auth/SplashScreen';
import Authstack from './AuthStack';

const config = {
  screens: {
    App: {
      screens: {
        MainTabs: {
          screens: {
            Home: {
              screens: {
                SongDetail : "/song/:id"
              },
            },
          },
        },
      },
    },
  },
};

type stackScreenType = {
  SplashScreen: undefined;
  Auth: undefined;
  App: undefined;
};

const linking = {
  prefixes: ['beatify-9fmh.onrender://', 'https://beatify-9fmh.onrender.com'],
  config,
};

const StackNavigator = () => {

 const Stack = createNativeStackNavigator<stackScreenType>();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#111113',
    },
  };

  return (
    <NavigationContainer linking={linking} ref={navigationRef} theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Auth" component={Authstack} />
        <Stack.Screen name="App" component={Appstack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
