import {
    View,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    StatusBar,
    Image,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import SharedButton from '@shared/Button';
  import {primaryColor, secondaryColor, tertiaryColor} from 'src/constant/color';
  import {setNavColor} from 'src/hooks/NavColor';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {appleIcon, githubIcon, googleIcon, greenHairMan, logo} from 'src/constant/image';
  import {homeText} from 'src/constant/text';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthNavigationProps } from 'src/types/navigationProps';
import LottieView from 'lottie-react-native';
import AppIcon from './Icon';
import OAuth from './OAuth';
  
  const AuthPage = () => {
    const {width, height} = useWindowDimensions();
    const navigation = useNavigation<NavigationProp<AuthNavigationProps>>()
    setNavColor({color : secondaryColor})
    return (
      <SafeAreaView className="bg-[#ffffff] h-full justify-center items-center">
        <StatusBar barStyle={'dark-content'} />
        <View className=" mt-3 absolute top-[5vh]">
          <AppIcon />
        </View>

        <View className='flex items-center' style={{marginLeft : width * .045}}>
        <LottieView style={{width : width * .9 , height : height * .35}} source={require('../../assets/gifs/guitar.json')} autoPlay loop />
        </View>
        <View className="items-center mt-[5vh]">
          <View className="flex  gap-3">
            <Text className="font-[RadioCanadaBig-Regular] text-[17px] text-black text-center">
              Enjoy Listening To Music
            </Text>
            <View style={{width: width * 0.9}}>
              <Text className="text-[#797979] text-[12px] text-center">
                {homeText}
              </Text>
            </View>
          </View>
        </View>
  
        <View className="flex flex-row  justify-between  mt-[4vh]" style={{width : width * .7}}>
          <View>
            <SharedButton text="Register" radius={20} btnWidth={width * 0.3} textSize={14} onPress={() => navigation.navigate("SignUp")} />
          </View>
          <View>
            <SharedButton text="Sign In"  bgColor={secondaryColor} radius={20} btnWidth={width * 0.3} textSize={14} textColor='black' onPress={() => navigation.navigate("SignIn")} />
          </View>
        </View>

     {/* <OAuth /> */}
  
      </SafeAreaView>
    );
  };
  
  export default AuthPage;
   
  