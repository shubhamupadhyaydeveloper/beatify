import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from 'src/auth/Signin';
import SignUp from 'src/auth/Signup';
import SplashScreen from 'src/auth/SplashScreen';
import ForgetPassword from 'src/forgetpassword/ForgetPassword';
import ResetPassword from 'src/forgetpassword/ResetPassword';
import AuthPage from 'src/pages/Authpage';
import Homepage from 'src/pages/Homepage';
import {AuthNavigationProps} from 'src/types/navigationProps';
import EmailVerification from 'src/verification/EmailVerification';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthNavigationProps>();

  return (
    <Stack.Navigator
      initialRouteName="AuthPage"
      screenOptions={{
        gestureEnabled: true,
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="ResetPassword" component={ResetPassword} />

      <Stack.Screen name="EmailVerification" component={EmailVerification} />

      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};
