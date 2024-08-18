// src/navigation/stack.js
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import Homepage from 'src/pages/Homepage';
import SignIn from 'src/auth/Signin';
import {
  AppNavigationProp,
  AuthNavigationProps,
  TabNavigationProps,
} from 'src/types/navigationProps';
import AuthPage from 'src/pages/Authpage';
import Signup from 'src/auth/Signup';
import ResetPassword from 'src/forgetpassword/ResetPassword';
import RegisterSuccessful from 'src/verification/RegisterSuccessful';
import EmailVerification from 'src/verification/EmailVerification';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ActualHomepage from 'src/homepage/ActualHomepage';
import useGlobalState from 'src/store/globalState';
import TabNavigation from './tab';
import Index from 'src/homepage/Index';
import Profile from 'src/homepage/Profile';

const StackNavigator = () => {
  const AuthStack = createStackNavigator<AuthNavigationProps>();
  const AppStack = createStackNavigator<AppNavigationProp>();
  const {loggedIn} = useGlobalState();

  const RenderAppStack = () => {
    return (
      <AppStack.Navigator initialRouteName='Index'>
         <AppStack.Screen
           name='Index'
           component={Index}
           options={{headerShown : false}}
         />
         <AppStack.Screen
          name='Profile'
          component={Profile}
          options={{headerShown : false}}
         />
      </AppStack.Navigator>
    )
  };

  const RenderAuthStack = () => {
    return (
      <AuthStack.Navigator initialRouteName="Onboarding">
        <AuthStack.Screen
          name="Onboarding"
          component={Homepage}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="AuthPage"
          component={AuthPage}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="SignUp"
          component={Signup}
          options={{headerShown: false}}
        />

        <AuthStack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="RegisterSuccess"
          component={RegisterSuccessful}
          options={{headerShown: false}}
        />

        <AuthStack.Screen
          name="EmailVerification"
          component={EmailVerification}
          options={{headerShown: false, title: ''}}
        />
      </AuthStack.Navigator>
    );
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
       background : "#EEF7FF"
      
    },
  };
  

  return (
    <NavigationContainer theme={MyTheme}>
      {loggedIn === true ? <RenderAppStack /> : <RenderAuthStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;
