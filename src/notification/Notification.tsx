import {View, Text, useWindowDimensions, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { notificationState } from 'src/store/notificationState';




const ShowNotification = () => {
  const {width,height} = useWindowDimensions();
  const sharedOpacity = useSharedValue(0);
  const {notification, removeNofitication,bgColor,textColor,position} = notificationState();

   useEffect(() => {
     if (notification) {
       handleStart();
       setTimeout(() => handleEnd(), 2900);
       setTimeout(() => removeNofitication(), 3000);
     }
   }, [notification]);


  const slideStyle = useAnimatedStyle(() => {
    return {
      opacity: sharedOpacity.value,
    };
  });

  const handleStart = () => {
    sharedOpacity.value = withTiming(1, {duration: 200});
  };

  const handleEnd = () => {
    sharedOpacity.value = withTiming(0, {duration: 400});
  };

  return notification ? (
    <Animated.View
      style={[
        {
          width: width * 0.95,
          height: 'auto',
          paddingVertical: 12,
          display: notification ? 'flex' : 'none',
          margin: 'auto',
          zIndex: 10,
          backgroundColor: bgColor ?? 'white',
          bottom : position ?? height * .08
        },
        slideStyle,
      ]}
      className=" rounded-sm absolute  self-center items-center justify-center mx-auto">
      <Text
        style={{color: textColor ?? "black", fontSize: 14}}
        className="font-[RadioCanadaBig-Regular]">
        {notification}
      </Text>
    </Animated.View>
  ) : null;
};

export default ShowNotification;
