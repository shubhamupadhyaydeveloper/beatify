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
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const dimension = useSharedValue({width: 0, height: 0});
  const isPressed = useSharedValue(false);

  const ballAnimation = useAnimatedStyle(() => {
    return {
      width: dimension.value.width + 100,
      height: dimension.value.height + 100,
      backgroundColor : isPressed.value ? "green" : "red"
    };
  });

  const gesture = Gesture
  .Pan()
  .onBegin(() => {
     isPressed.value = true
  })
  .onUpdate(e => {
     dimension.value = {
       width: interpolate(
         e.translationX,
         [0, 500],
         [100, 200],
         Extrapolation.CLAMP,
       ),
       height: interpolate(
         e.translationY,
         [0, 500],
         [100, 200],
         Extrapolation.CLAMP,
       ),
     };
  })
  .onEnd(() => {
     dimension.value = {
         width : 0,
         height : 0
     }
  })
  .onFinalize(() => {
     isPressed.value = false
  })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball, ballAnimation]} />
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ball: {
    borderRadius: 100,
    alignSelf: 'center',
  },
});

export default UseCamera;
