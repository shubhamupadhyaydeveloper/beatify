import {View, Text, useWindowDimensions, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type props = {
  duration?: number;
  message: string;
};

const Notification = ({ duration = 3000, message}: props) => {
  const {width} = useWindowDimensions();
  const [visible, SetVisible] = useState(true);
  const sharedOpacity = useSharedValue(0);

  useEffect(() => {
    handleStart();
    setTimeout(() => {
      handleEnd();
    }, duration);
    setTimeout(() => {
      SetVisible(false);
    }, 3200);
  }, []);

  const slideStyle = useAnimatedStyle(() => {
    return {
      opacity: sharedOpacity.value,
    };
  });

  const handleStart = () => {
    sharedOpacity.value = withTiming(1, {duration: 400});
  };

  const handleEnd = () => {
    sharedOpacity.value = withTiming(0, {duration: 500});
  };

  return (
    <Animated.View
      style={[
        {
          
          width: width * 0.95,
          height: 'auto',
          paddingVertical: 13,
          display: visible ? 'flex' : 'none',
          left: width * 0.048,
          zIndex: 10,
        },
        slideStyle,
      ]}
      className=" bg-white/90 rounded-xl absolute bottom-[10vh]  items-center justify-center mx-auto">
      <Text style={{color: 'black', fontSize: 16}} className='font-[RadioCanadaBig-Regular]'>{message}</Text>
    </Animated.View>
  );
};

export default Notification;
