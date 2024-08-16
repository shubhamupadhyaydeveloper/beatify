import { View, Text, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AuthNavigationProps } from 'src/types/navigationProps'

const RegisterSuccessful = () => {
  const {width,height} = useWindowDimensions()
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>()
  useEffect(() => {
    setTimeout(() => {
       navigation.navigate('Homepage')
    },2000)
  },[])
  return (
    <SafeAreaView className='w-full h-full items-center bg-white justify-center'>
 
      <LottieView style={{width : width * .8 , height : height * .4}} source={require('../../assets/done.json')} autoPlay loop={false} />
      <Text className='text-black font-[RadioCanadaBig-Bold] text-[20px] mb-[5vh]'>Register Successful</Text> 
    </SafeAreaView>
  )
}

export default RegisterSuccessful;