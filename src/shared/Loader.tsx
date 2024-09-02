import {ActivityIndicator, Text, useWindowDimensions, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react'

const Loader = () => {
    const {width, height} = useWindowDimensions();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor : "black"}}>
    <LottieView
      style={{width: width * 0.45, height: height * 0.25}}
      source={require('../../assets/gifs/loading.json')}
      autoPlay
      loop={true}
    />
  </View>
  )
}

export default Loader;