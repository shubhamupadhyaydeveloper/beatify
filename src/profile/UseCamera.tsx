import React, {useEffect, useState} from 'react';
import {View, Button, Image, StyleSheet, Alert} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {launchCamera, CameraOptions} from 'react-native-image-picker';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

const UseCamera: React.FC = () => {
  return (
    <View>
      <Animated.Image
        source={require('../../assets/images/logo.png')}
        style={{width: 300, height: 300,tintColor : 'white'}}
      
      />
    </View>
  );
};

export default UseCamera;
