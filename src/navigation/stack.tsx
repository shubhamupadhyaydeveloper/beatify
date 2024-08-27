import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Homepage from '../pages/Homepage';
import SignIn from '../auth/Signin';
import AuthPage from '../pages/Authpage';
import SignUp from '../auth/Signup';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ActualHomepage from '../homepage/ActualHomepage';
import useGlobalState from '../store/globalState';
import TabNavigation from './tab';
import { AppNavigationProp, AuthNavigationProps } from 'src/types/navigationProps';
import ResetPassword from 'src/forgetpassword/ResetPassword';
import RegisterSuccessful from 'src/verification/RegisterSuccessful';
import EmailVerification from 'src/verification/EmailVerification';
import ForgetPassword from 'src/forgetpassword/ForgetPassword';


const StackNavigator = () => {
  const AuthStack = createStackNavigator<AuthNavigationProps>();
  const AppStack = createStackNavigator<AppNavigationProp>();
  const {loggedIn} = useGlobalState();

  const RenderAppStack = () => {
    return <TabNavigation />;
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
          component={SignUp}
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

        <AuthStack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#111113',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {loggedIn === true ? <RenderAppStack /> : <RenderAuthStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;
