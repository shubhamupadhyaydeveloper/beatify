import {ActivityIndicator, Text, useWindowDimensions, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';

const AppLoader = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        top : 0,
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="h-full w-full  bg-black/70">
      <LottieView
        style={{width: width * 0.35, height: height * 0.2}}
        source={require('../../assets/loading.json')}
        autoPlay
        loop={true}
      />
    </View>
  );
};

export default AppLoader;
