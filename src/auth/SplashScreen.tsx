import {View, Text, useWindowDimensions, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {setNavColor} from 'src/hooks/NavColor';
import useGlobalState from 'src/store/globalState';
import {resetAndNavigate} from 'src/navigation/navigaionutils';

const SplashScreen = () => {
  const {loggedIn} = useGlobalState();
  const {width, height} = useWindowDimensions();
  setNavColor({color: 'transparent'});

  const checkToken = () => {
     if(loggedIn === true) {
       resetAndNavigate('App')
     } else {
       resetAndNavigate('Auth');
     }
  }

  useEffect(() => {
     const timeOut = setTimeout(() => {
      checkToken()
     },2000)

     return () => clearTimeout(timeOut)
  }, []);
 
  return (
    <View
      style={{width, height}}
      className="items-center justify-center bg-[#111113]">
      <StatusBar translucent backgroundColor="transparent" barStyle="default" />
      <Text className="text-white">Beatify</Text>
    </View>
  );
};

export default SplashScreen;
