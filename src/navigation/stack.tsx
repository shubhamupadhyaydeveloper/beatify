import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import useGlobalState from '../store/globalState';
import Appstack from './tab';
import Authstack from './AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'src/auth/SplashScreen';
import { navigationRef } from './navigationInitial';
const config = {
  screens: {
    Song: 'share/song/:songId',
    Playlist: 'share/playlist/:playlistId',
  },
};

const linking = {
  prefixes: ['http://localhost:3000', ''],
  config,
};

type stack = {
  SplashScreen: undefined;
  Auth: undefined;
  App: undefined;
};

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<stack>();
  const {loggedIn} = useGlobalState();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#111113',
    },
  };

  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="App" component={Appstack} />
        <Stack.Screen name="Auth" component={Authstack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
