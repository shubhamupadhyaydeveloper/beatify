import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import KeyboardView from '@shared/KeyboardView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {homeImage, logo} from 'src/constant/image';
import {homeText} from 'src/constant/text';
import SharedButton from '@shared/Button';
import {setNavColor} from 'src/hooks/NavColor';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from 'src/types/navigationProps';
import AppIcon from './Icon';

const Homepage = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>();
  setNavColor({color: 'transparent'});
  return (
    <View className="flex flex-1  ">
      <StatusBar translucent backgroundColor="transparent" barStyle="default" />
      <ImageBackground
        source={homeImage}
        resizeMode="cover"
        className="flex-1 ">
        <SafeAreaView
          className="flex items-center justify-between"
          style={{height: height * 0.9}}>
          <AppIcon />
          <View className="items-center">
            <View className="flex  gap-3">
              <Text className="font-[RadioCanadaBig-Regular] text-white text-[17px] text-center">
                Enjoy Listening To Music
              </Text>
              <View style={{width: width * 0.9}}>
                <Text className="text-[#797979] text-[12px] text-center">
                  {homeText}
                </Text>
              </View>
            </View>
            <View className="" style={{marginTop: height * 0.04}}>
              <SharedButton
                text="Get Started"
                onPress={() => navigation.navigate('AuthPage')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Homepage;
