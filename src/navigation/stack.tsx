import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Appstack from './tab'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './navigaionutils';
import { AuthStack } from './authstack';
import SplashScreen from 'src/auth/SplashScreen';

const config = {
  screens: {
    SongDetail: '/sharelink/song/:id',
    // UserDetail : '/sharelink/user/:id'
  },
};

type stackScreenType = {
  SplashScreen: undefined;
  Auth: undefined;
  App: undefined;
};

const linking = {
  prefixes: ['http://localhost:3000', 'http://192.168.1.110:3000'],
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
        <Stack.Screen name="App" component={Appstack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
