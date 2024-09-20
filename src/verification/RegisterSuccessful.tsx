import {View, Text, useWindowDimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from 'src/types/navigationProps';
import Animated from 'react-native-reanimated';

const RegisterSuccessful = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>();
  useEffect(() => {
    setTimeout(() => {

    }, 2000);
  }, []);
  return (
    <SafeAreaView className="w-full h-full items-center bg-white justify-center">

      <Text className="text-black font-[RadioCanadaBig-Bold] text-[20px] mb-[5vh]">
        Register Successful
      </Text>
    </SafeAreaView>
  );
};

export default RegisterSuccessful;
