import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './navigaionutils';
import SplashScreen from 'src/auth/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack} from './authstack';
import AppStack from './tab';

type stackScreenType = {
  SplashScreen: undefined;
  Auth: undefined;
  App: undefined;
};

const config = {
  screens: {
    SongDetail: 'sharelink/song/:songId',
    // Playlist: 'sharelink/playlist/:playlistId',
  },
};

const linking = {
  prefixes: ['http://localhost:3000', 'http://192.168.1.109:3000'],
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
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
