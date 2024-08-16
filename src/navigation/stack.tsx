// src/navigation/stack.js
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from 'src/pages/Homepage';
import SignIn from 'src/auth/Signin';
import {AuthNavigationProps} from 'src/types/navigationProps';
import AuthPage from 'src/pages/Authpage';
import Signup from 'src/auth/Signup';
import ResetPassword from 'src/forgetpassword/ResetPassword';
import RegisterSuccessful from 'src/verification/RegisterSuccessful';
import ActualHomepage from 'src/homepage/ActualHomepage';
import EmailVerification from 'src/verification/EmailVerification';

const StackNavigator = () => {
  const Stack = createStackNavigator<AuthNavigationProps>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthPage"
          component={AuthPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{headerShown : false}}
        />
        <Stack.Screen
         name='RegisterSuccess'
         component={RegisterSuccessful}
         options={{headerShown : false}}
        />
        <Stack.Screen
         name='Homepage'
         component={ActualHomepage}
         options={{headerShown : false}}
        />
        <Stack.Screen
         name='EmailVerification'
         component={EmailVerification}
         options={{headerShown : false,title : ""}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
