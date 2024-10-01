import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigationProps} from 'src/types/navigationProps';
import Homepage from 'src/pages/Homepage';
import SignIn from 'src/auth/Signin';
import AuthPage from 'src/pages/Authpage';
import SignUp from 'src/auth/Signup';
import ResetPassword from 'src/forgetpassword/ResetPassword';
import RegisterSuccessful from 'src/verification/RegisterSuccessful';
import EmailVerification from 'src/verification/EmailVerification';
import ForgetPassword from 'src/forgetpassword/ForgetPassword';

const Authstack = () => {
  const AuthStack = createNativeStackNavigator<AuthNavigationProps>();
  return (
    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        gestureEnabled: true,
        animation: 'slide_from_right',
      }}>
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

export default Authstack;
